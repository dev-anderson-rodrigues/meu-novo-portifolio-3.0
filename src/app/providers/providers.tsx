"use client";

import {
  ThemeProvider,
  ProjectProvider,
  LanguageProvider,
} from "@/app/contexts";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      <ProjectProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ProjectProvider>
    </LanguageProvider>
  );
};
