import { projectsPort, projectsEnglish } from "@/app/utils/index";
import { createContext, useState, ReactNode, useEffect } from "react";
import { objectProject, ProjectContextType } from "./type";
import { useLanguage } from "../language-context/useLanguage";

export const AppProjectContext = createContext<ProjectContextType>(null!);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState<objectProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [arrayProject, setArrayProject] = useState(projectsPort);
  const { language } = useLanguage();

  useEffect(() => {
    if (language === "Portuguese") {
      setArrayProject(projectsPort);
    }
    if (language === "English") {
      setArrayProject(projectsEnglish);
    }

    if (arrayProject.length === 0) {
      console.warn("Warning: No projects available");
      setProject([]);
      return;
    }

    if (selectedProject) {
      const data = arrayProject.filter(
        (proj) => proj.title === selectedProject
      );

      if (data.length > 0) {
        setProject(data);
      } else {
        console.warn("Warning: No projects found for the selected title.");
        setProject([]);
      }
    } else {
      console.warn("Warning: No project selected.");
      setProject([]);
    }
  }, [arrayProject, language, selectedProject]);

  return (
    <AppProjectContext.Provider
      value={{ project, setSelectedProject, setProject }}
    >
      {children}
    </AppProjectContext.Provider>
  );
};
