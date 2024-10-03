"use client";

import { ThemeProvider, ProjectProvider } from "@/app/contexts";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProjectProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ProjectProvider>
  );
};
