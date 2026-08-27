"use client";

import React from "react";
import Image from "next/image";
import { useLanguage, useProject } from "@/app/contexts";

type props = {
  /** Captura real do projeto. Ausente quando não existe uma. */
  src?: string;
  /**
   * Iniciais do projeto, usadas na capa gerada. Os quatro backends
   * não têm captura — compartilhavam o mesmo GIF genérico de placa
   * de circuito, o que numa grade fica lado a lado e denuncia. A
   * capa gerada distingue cada um sem fabricar screenshot nenhum.
   */
  mono?: string;
  /** Varia o ângulo do gradiente para as capas não saírem idênticas. */
  seed?: number;
  tecnologies: string;
  title: string;
  description: string;
};

/**
 * O card é um <button> de verdade, não uma <div> com onClick. Antes o
 * clique só respondia abaixo de 1280px e o botão "Ver Mais" só existia
 * acima de 1280px — quem usava teclado não alcançava nenhum dos dois.
 *
 * Só conteúdo de frase pode viver dentro de um <button>, por isso a
 * estrutura interna usa <span> com display block em vez de <div>/<p>.
 */
const Cards = ({ src, mono, seed = 0, tecnologies, title, description }: props) => {
  const { language } = useLanguage();
  const { setSelectedProject } = useProject();
  const pt = language === "Portuguese";

  const chips = tecnologies
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <button
      type="button"
      onClick={() => setSelectedProject(title)}
      className="pcard"
      aria-label={`${pt ? "Ver detalhes do projeto" : "View project details"}: ${title}`}
    >
      <span
        className={`pcard__media${src ? "" : " pcard__media--gen"}`}
        style={src ? undefined : ({ "--seed": seed } as React.CSSProperties)}
      >
        {src ? (
          <Image
            src={src}
            alt=""
            fill
            quality={90}
            sizes="(max-width: 640px) 88vw, (max-width: 1280px) 45vw, 300px"
            className="pcard__img"
          />
        ) : (
          <>
            {/* Esquema abstrato de rotas: sugere uma lista de
                endpoints sem inventar nenhum. */}
            <span className="pcard__routes" aria-hidden="true">
              <i /><i /><i /><i /><i />
            </span>
            <span className="pcard__mono" aria-hidden="true">
              {mono}
            </span>
          </>
        )}
      </span>

      <span className="pcard__body">
        <span className="pcard__chips">
          {chips.map((c) => (
            <span className="pcard__chip" key={c}>
              {c}
            </span>
          ))}
        </span>

        <span className="pcard__title">{title}</span>
        <span className="pcard__desc">{description}</span>

        <span className="pcard__cta" aria-hidden="true">
          {pt ? "Ver mais" : "View more"}
          <svg viewBox="0 0 16 16" className="pcard__arrow" focusable="false">
            <path
              d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </button>
  );
};

export default Cards;
