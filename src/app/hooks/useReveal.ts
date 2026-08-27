"use client";

import { useEffect, useRef } from "react";

/**
 * Revelação no scroll com IntersectionObserver — sem biblioteca.
 *
 * Marca cada filho do elemento com .is-revealed quando ele entra na
 * viewport, e para de observar em seguida: a animação roda uma vez
 * só. Bibliotecas de scroll costumam reanimar toda vez que você
 * volta pela página, o que cansa na segunda passada.
 *
 * Quem pede menos movimento no sistema recebe tudo já revelado, sem
 * observador nenhum.
 */
export const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const filhos = Array.from(root.children) as HTMLElement[];

    const semMovimento =
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (semMovimento || typeof IntersectionObserver === "undefined") {
      filhos.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

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

    return () => obs.disconnect();
  }, []);

  return ref;
};
