"use client";
import { createContext, useCallback, useState, ReactNode } from "react";
import { Theme, ThemeContextType } from "./type";

export const AppThemeContext = createContext<ThemeContextType>(null!);

/**
 * O tema já foi resolvido pelo script de bootstrap no <head>, antes da
 * hidratação. Aqui só lemos o que ele decidiu — nada de efeito lendo e
 * outro escrevendo, que era o que criava a corrida capaz de apagar a
 * preferência salva do visitante.
 *
 * No servidor não existe `document`, então o valor inicial é "dark".
 * Nenhum componente renderiza a partir de `theme`: quem muda de
 * aparência faz isso por CSS, via seletor [data-theme]. Assim a
 * hidratação nunca diverge.
 */
const readTheme = (): string =>
  typeof document === "undefined"
    ? "dark"
    : document.documentElement.getAttribute("data-theme") ?? "dark";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<string>(readTheme);

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* modo privado ou storage bloqueado: o tema vale só nesta visita */
    }
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    const atual = document.documentElement.getAttribute("data-theme");
    applyTheme(atual === "dark" ? "light" : "dark");
  }, [applyTheme]);

  return (
    <AppThemeContext.Provider
      value={{ theme, toggleTheme, setTheme: applyTheme }}
    >
      {children}
    </AppThemeContext.Provider>
  );
};
