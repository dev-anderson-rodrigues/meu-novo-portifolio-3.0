import { Dispatch, SetStateAction } from "react";

export type ProjectContextType = {
  project: objectProject[];
  setProject: Dispatch<SetStateAction<objectProject[]>>;
  setSelectedProject: (project: string) => void;
};

export type objectProject = {
  title: string;
  description: string;
  functions: string[];
  url: string;
  image: string[];
  tecnologies: string[];
};
