"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "@/app/contexts";

const BRANDS = [
  { id: "coral", pt: "Coral", en: "Coral" },
  { id: "ambar", pt: "Âmbar", en: "Amber" },
  { id: "lilas", pt: "Lilás", en: "Lilac" },
  { id: "champanhe", pt: "Champanhe", en: "Champagne" },
  { id: "turquesa", pt: "Turquesa", en: "Turquoise" },
] as const;

/**
 * Um controle só para aparência, no lugar de dois botões soltos na
 * barra. O gatilho mostra a cor escolhida no momento; o painel traz
 * tema e cores com nome, que quatro bolinhas cruas não conseguiam
 * comunicar.
 *
 * Qual opção está ativa é desenhado pelo CSS a partir de
 * [data-theme] e [data-brand] no <html> — nunca a partir de estado
 * do React, senão o servidor e o cliente renderizariam árvores
 * diferentes e a hidratação quebraria.
 */
export const AppearanceMenu = ({ language }: { language: string }) => {
  const pt = language === "Portuguese";
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onPointer = (e: PointerEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, close]);

  const pickBrand = (id: string) => {
    document.documentElement.setAttribute("data-brand", id);
    try {
      localStorage.setItem("brand", id);
    } catch {
      /* storage bloqueado: vale só nesta visita */
    }
  };



  return (
    <div className="appearance" ref={boxRef}>
      <button
        ref={triggerRef}
        type="button"
        className="appearance__trigger"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={pt ? "Aparência do site" : "Site appearance"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="appearance__swatch" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="appearance__panel"
          role="dialog"
          aria-label={pt ? "Aparência" : "Appearance"}
        >
          <p className="appearance__label">{pt ? "Tema" : "Theme"}</p>
          <div className="appearance__seg">
            <button
              type="button"
              className="appearance__segbtn"
              data-value="light"
              onClick={() => setTheme("light")}
            >
              {pt ? "Claro" : "Light"}
            </button>
            <button
              type="button"
              className="appearance__segbtn"
              data-value="dark"
              onClick={() => setTheme("dark")}
            >
              {pt ? "Escuro" : "Dark"}
            </button>
          </div>

          <p className="appearance__label">{pt ? "Cor" : "Color"}</p>
          <ul className="appearance__colors">
            {BRANDS.map((b) => (
              <li key={b.id}>
                <button
                  type="button"
                  className={`appearance__color appearance__color--${b.id}`}
                  data-value={b.id}
                  onClick={() => pickBrand(b.id)}
                >
                  <span className="appearance__chip" aria-hidden="true" />
                  <span>{pt ? b.pt : b.en}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AppearanceMenu;
