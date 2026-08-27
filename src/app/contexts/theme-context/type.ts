export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
  /**
   * Fixa um tema e persiste, mesmo que já seja o valor em vigor.
   * Clicar numa opção é uma escolha explícita do visitante: se ela
   * coincidir com a preferência do sistema, ainda assim precisa
   * grudar — senão o site volta a seguir o sistema depois.
   */
  setTheme: (value: Theme) => void;
};
