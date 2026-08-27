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

  // Se o componente sair de cena com o observador de pé, ele fica.
  useEffect(() => () => obsRef.current?.disconnect(), []);

  return useCallback((root: T | null) => {
    obsRef.current?.disconnect();
    obsRef.current = null;

    if (!root) return;

    const filhos = Array.from(root.children) as HTMLElement[];

    const semMovimento =
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (semMovimento || typeof IntersectionObserver === "undefined") {
      filhos.forEach((el) => el.classList.add("is-revealed"));
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

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-revealed");
          obs.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    filhos.forEach((el, i) => {
      // Escalonamento curto: passa a impressão de sequência sem
      // fazer ninguém esperar pelo último card.
      el.style.setProperty("--reveal-delay", `${Math.min(i, 7) * 60}ms`);
      obs.observe(el);
    });

    obsRef.current = obs;
  }, []);
};
