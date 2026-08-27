export type ProjectContextType = {
  /** Projeto aberto, derivado do título selecionado. Vazio = grade. */
  project: objectProject[];
  setSelectedProject: (project: string) => void;
};

export type objectProject = {
  title: string;
  description: string;
  functions: string[];
  url: string;
  image: string[];
  technologies: string[];
};
