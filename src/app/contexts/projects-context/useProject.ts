import { useContext } from "react";
import { AppProjectContext } from "@/app/contexts";

export const useProject = () => {
  const context = useContext(AppProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
};
