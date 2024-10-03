import { useProject } from "@/app/contexts";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const ContentProject = () => {
  const { project, setSelectedProject, setProject } = useProject();
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  const [read, setRead] = useState(false);
  const [readFunc, setReadFunc] = useState(false);
  const currentProject = project[0];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (currentImageIndex < currentProject.image.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleExit = () => {
    setSelectedProject("");
    setProject([]);
  };

  const handleReadMore = () => {
    setRead(!read);
  };
  const handleReadFunc = () => {
    setReadFunc(!readFunc);
  };

  return (
    <div className="relative w-full h-full justify-center items-center rounded-xl p-4 pt-0  content-projects ">
      {currentProject ? (
        <>
          <button onClick={handleExit}>
            <div className="p-2 shadow-sm w-8 h-8 flex justify-center items-center rounded-lg absolute right-6 top-6 btn">
              X
            </div>
          </button>
          <h3 className="pt-10 xl:pt-0 w-full flex text-center items-center justify-center font-semibold text-xl">
            {currentProject.title}
          </h3>
          <div className="h-1/4 pt-6 flex flex-wrap flex-row ">
            <h3 className="text-xl font-semibold">Descrição:</h3>
            <p className="pt-1 pl-2 text-base font-semibold description">
              {currentProject.description}
            </p>
          </div>
          <div className="flex gap-2 h-20 items-start pt-4 max-w-screen-md justify-start">
            <h3 className="text-xl font-semibold">Visitar:</h3>
            <a
              href={currentProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentProject.url}
            </a>
          </div>
          <div
            style={{
              maxHeight: isMobile ? "100%" : read ? "100%" : "89px", // Ajusta a altura da div
              overflow: "hidden", // Oculta o conteúdo quando "Ver Menos" está ativo
              transition: "max-height 0.3s ease-in-out", // Adiciona uma animação suave
            }}
          >
            <h3 className="text-xl font-semibold pt-2">Funcionalidades:</h3>
            {currentProject.functions.map((func, index) => (
              <div
                key={index}
                className="pt-2 text-base font-semibold description pl-2"
              >
                {func}
              </div>
            ))}
          </div>
          {!isMobile && (
            <button
              onClick={handleReadMore}
              className="font-semibold border-b-2 border-slate-600 btn-read pl-2 pt-2"
            >
              {read ? "Ver Menos" : "Ver Mais"}
            </button>
          )}
          <div
            className="xl:w-2/4 pt-5 min-h-80 "
            style={{
              maxHeight: isMobile ? "100%" : readFunc ? "100%" : "89px", // Ajusta a altura da div
              overflow: "hidden", // Oculta o conteúdo quando "Ver Menos" está ativo
              transition: "max-height 0.3s ease-in-out", // Adiciona uma animação suave
            }}
          >
            <h3 className="text-xl font-semibold">Tecnologias:</h3>
            {currentProject.tecnologies.map((tech, index) => (
              <div
                key={index}
                className="pt-1 text-base font-semibold description pl-2"
              >
                {tech}
              </div>
            ))}
          </div>
          {!isMobile && (
            <button
              onClick={handleReadFunc}
              className="font-semibold border-b-2 border-slate-600 btn-read pl-2 pt-2"
            >
              {read ? "Ver Menos" : "Ver Mais"}
            </button>
          )}
          <div className="xl:w-2/5 pt-5 xl:absolute right-4 bottom-4 ">
            <div className="relative">
              {Array.isArray(currentProject.image) &&
                currentProject.image.length > 0 && (
                  <Image
                    src={currentProject.image[currentImageIndex]} // Mostra a imagem atual
                    alt={`${currentProject.title} - ${currentImageIndex + 1}`}
                    width={600} // Ajuste o tamanho conforme necessário
                    height={250} // Ajuste o tamanho conforme necessário
                    quality={100}
                    layout="responsive"
                    className="rounded-2xl bg-cover img-content"
                  />
                )}
              <div className="absolute left-4  xl:right-4 bottom-4 flex space-x-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentImageIndex === 0}
                  className={`btn-nav-img-projects border-b-2 border-slate-600 ${
                    currentImageIndex === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={
                    currentImageIndex === currentProject.image.length - 1
                  }
                  className={`btn-nav-img-projects border-b-2 border-slate-600 ${
                    currentImageIndex === currentProject.image.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Erro: Nenhum projeto disponível</div>
      )}
    </div>
  );
};

export default ContentProject;
