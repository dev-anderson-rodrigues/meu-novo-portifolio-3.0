import { projectsPort, projectsEnglish } from "@/app/utils/index";
import { createContext, useMemo, useState, ReactNode } from "react";
import { objectProject, ProjectContextType } from "./type";
import { useLanguage } from "../language-context/useLanguage";

export const AppProjectContext = createContext<ProjectContextType>(null!);

/**
 * Antes havia dois estados (a lista traduzida e o projeto aberto) que
 * um useEffect mantinha em sincronia, e o efeito se listava entre as
 * próprias dependências: cada troca de idioma custava uma renderização
 * extra. Pior, ele imprimia três console.warn no caminho normal —
 * "No project selected" saía no console de todo mundo que abrisse o
 * site sem clicar em nada.
 *
 * As duas informações são derivadas: a lista sai do idioma e o projeto
 * aberto sai do título selecionado. Sem efeito, sem aviso e sem
 * estado duplicado.
 */
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const { language } = useLanguage();

  const project = useMemo<objectProject[]>(() => {
    if (!selectedProject) return [];
    const lista = language === "Portuguese" ? projectsPort : projectsEnglish;
    return lista.filter((proj) => proj.title === selectedProject);
  }, [language, selectedProject]);

  const value = useMemo(
    () => ({ project, setSelectedProject }),
    [project]
  );

  return (
    <AppProjectContext.Provider value={value}>
      {children}
    </AppProjectContext.Provider>
  );
};
