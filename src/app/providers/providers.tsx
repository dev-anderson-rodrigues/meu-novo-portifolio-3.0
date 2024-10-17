"use client";

import {
  ThemeProvider,
  ProjectProvider,
  LanguageProvider,
} from "@/app/contexts";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProjectProvider>
      <LanguageProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </LanguageProvider>
    </ProjectProvider>
  );
};
