"use client";
import { projects } from "@/app/components/section-projects/content-project/utils";
import { createContext, useState, ReactNode, useEffect } from "react";
import { objectProject, ProjectContextType } from "./type";

export const AppProjectContext = createContext<ProjectContextType>(null!);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState<objectProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>("");

  useEffect(() => {
    const arrayProjects = projects;

    if (arrayProjects.length === 0) {
      console.warn("Warning: No projects available"); // Use um warning ao invés de erro
      setProject([]); // Defina como um array vazio
      return; // Retorna para evitar continuar
    }

    if (selectedProject) {
      const data = arrayProjects.filter(
        (proj) => proj.title === selectedProject
      );

      if (data.length > 0) {
        setProject(data);
      } else {
        console.warn("Warning: No projects found for the selected title."); // Aviso se não houver correspondências
        setProject([]); // Ou defina como vazio se necessário
      }
    } else {
      console.warn("Warning: No project selected."); // Aviso se nenhum projeto for selecionado
      setProject([]); // Defina como vazio ou deixe inalterado
    }
  }, [selectedProject]);

  return (
    <AppProjectContext.Provider
      value={{ project, setSelectedProject, setProject }}
    >
      {children}
    </AppProjectContext.Provider>
  );
};
