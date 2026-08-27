"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Revelação no scroll com IntersectionObserver — sem biblioteca.
 *
 * Devolve uma callback ref, não uma ref comum, e isso é o ponto: a
 * versão anterior usava useRef com um useEffect de dependência vazia,
 * então o observador era montado uma única vez na vida do componente.
 * A grade de projetos, porém, desmonta quando alguém abre o detalhe de
 * um projeto e volta a montar quando fecha — e nessa segunda montagem
 * ninguém observava mais os cards. Como o estado de repouso é opacidade
 * zero, os oito projetos sumiam de vez: bastava abrir um projeto e
 * fechar para a seção inteira ficar preta.
 *
 * A callback ref é chamada pelo React a cada anexação e a cada
 * desanexação do elemento, então o observador acompanha o ciclo de vida
 * real do nó em vez de supor que ele nunca muda.
 *
 * A animação continua rodando uma vez só por montagem: bibliotecas de
 * scroll costumam reanimar toda vez que você volta pela página, e isso
 * cansa na segunda passada.
 */
export const useReveal = <T extends HTMLElement>() => {
  const obsRef = useRef<IntersectionObserver | null>(null);
  const limparRef = useRef<(() => void) | null>(null);

  // Se o componente sair de cena com o observador de pé, ele fica.
  useEffect(
    () => () => {
      obsRef.current?.disconnect();
      limparRef.current?.();
    },
    []
  );

  return useCallback((root: T | null) => {
    obsRef.current?.disconnect();
    obsRef.current = null;
    limparRef.current?.();
    limparRef.current = null;

    if (!root) return;

    const filhos = Array.from(root.children) as HTMLElement[];

    const semMovimento =
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (semMovimento || typeof IntersectionObserver === "undefined") {
      filhos.forEach((el) => (el.dataset.revealed = ""));
      return;
    }

    /**
     * O estado escondido só existe depois deste atributo. Enquanto ele
     * não é escrito, o conteúdo está visível — se o JavaScript falhar,
     * não carregar ou este código quebrar, o visitante ainda vê os
     * projetos. Esconder primeiro e contar com o JavaScript para
     * revelar é apostar o conteúdo num script.
     */
    root.dataset.reveal = "ready";

    /**
     * Marca por atributo, não por classe.
     *
     * O React é dono do `className` de cada item: quando um card
     * abre e fecha na grade, ele reescreve esse atributo inteiro e
     * leva junto qualquer classe adicionada por fora — o card que
     * você acabou de fechar voltava a ficar invisível. Um data-* que
     * não aparece no JSX o React nunca toca.
     */
    const revelar = (el: Element) => {
      (el as HTMLElement).dataset.revealed = "";
      obs.unobserve(el);
      pendentes.delete(el as HTMLElement);
      if (pendentes.size === 0) pararVarredura();
    };

    const pendentes = new Set<HTMLElement>(filhos);

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) revelar(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    /**
     * Rede de segurança para rolagem rápida.
     *
     * Num arrastão de dedo o elemento consegue atravessar a tela
     * inteira entre duas apurações do observador, e aí ele nunca é
     * notificado — o card ficava invisível para sempre mesmo depois de
     * a pessoa ter passado por cima dele. Medindo em Chromium, uma
     * rolagem de 1800px por quadro deixava três dos oito para trás.
     *
     * Não adianta testar isso dentro do callback do observador: se ele
     * não dispara para aquele elemento, não há callback nenhum. A
     * varredura precisa ser independente — passiva, adiada por quadro
     * e desligada assim que o último card aparece.
     */
    let agendado = false;

    const varrer = () => {
      agendado = false;
      const limite = window.innerHeight;
      pendentes.forEach((el) => {
        if (el.getBoundingClientRect().top < limite) revelar(el);
      });
    };

    const aoRolar = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(varrer);
    };

    function pararVarredura() {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    }

    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar, { passive: true });
    limparRef.current = pararVarredura;

    filhos.forEach((el, i) => {
      // Escalonamento curto: passa a impressão de sequência sem
      // fazer ninguém esperar pelo último card.
      el.style.setProperty("--reveal-delay", `${Math.min(i, 7) * 60}ms`);
      obs.observe(el);
    });

    // Primeira medição sem depender de rolagem: quem já está na tela
    // no momento da montagem aparece na hora. É o caso de voltar do
    // detalhe de um projeto, em que a grade remonta com a seção
    // inteira já enquadrada e nenhum evento de rolagem acontece.
    requestAnimationFrame(varrer);

    obsRef.current = obs;
  }, []);
};
