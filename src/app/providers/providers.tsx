"use client";

import { ThemeProvider } from "@/app/contexts";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
