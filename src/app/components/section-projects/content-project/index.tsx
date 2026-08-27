import { useLanguage, useProject } from "@/app/contexts";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ContentProject = () => {
  const { project, setSelectedProject } = useProject();
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  const [readFunc, setReadFunc] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const currentProject = project[0];
  const { language } = useLanguage();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const techRef = useRef<HTMLDivElement>(null);

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
  };

  const handleReadFunc = () => {
    setReadFunc(!readFunc);
  };

  /**
   * Saber se a lista de tecnologias estoura só é possível depois do
   * layout, então medir é inevitável. O que não era necessário é
   * medir uma vez só: a versão anterior lia o scrollHeight quando o
   * projeto mudava e nunca mais, então girar o celular ou aumentar a
   * fonte do sistema deixava o "Ver mais" mentindo — aparecendo sem
   * ter o que revelar, ou sumindo com texto ainda cortado.
   *
   * O ResizeObserver dispara já na primeira observação e a cada
   * mudança de largura, o que cobre os dois casos.
   */
  useEffect(() => {
    const el = techRef.current;
    if (!el) return;

    if (typeof ResizeObserver === "undefined") {
      setIsOverflowing(el.scrollHeight > 384);
      return;
    }

    const obs = new ResizeObserver(() => {
      setIsOverflowing(el.scrollHeight > 384);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [currentProject]);

  return (
    <div className="relative w-full h-full justify-center items-center rounded-xl p-4 pt-0  content-projects ">
      {currentProject ? (
        <>
          <button
            type="button"
            onClick={handleExit}
            aria-label={language === "Portuguese" ? "Fechar detalhes" : "Close details"}
            className="p-2 shadow-sm w-8 h-8 flex justify-center items-center rounded-lg absolute right-6 top-6 btn"
          >
            X
          </button>
          <h3 className="pt-10 xl:pt-0 w-full flex text-center items-center justify-center font-semibold text-xl ">
            <div className="border-b-2 border-slate-600 px-4">
              {currentProject.title}
            </div>
          </h3>

          {/* A galeria era `absolute right-4 bottom-4`, ancorada no
              painel inteiro: a altura do painel tinha de ser adivinhada
              pelo texto para a imagem caber. Duas colunas de grade
              resolvem sem ninguém precisar adivinhar nada. */}
          <div className="detalhe__corpo">
            <div className="detalhe__texto">
          <div className="h-1/4 pt-6 flex flex-wrap flex-row ">
            <h3 className="text-xl font-semibold">
              {language === "Portuguese" ? "Descrição:" : "Description"}
            </h3>
            <p className="pt-1 pl-2 text-base font-semibold description">
              {currentProject.description}
            </p>
          </div>
          <div className="flex gap-2 h-20 items-start pt-4 max-w-screen-md justify-start">
            <h3 className="text-xl font-semibold">
              {language === "Portuguese" ? "Visitar:" : "Visit:"}
            </h3>
            <a
              href={currentProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentProject.url}
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold pt-2">
              {language === "Portuguese"
                ? "Funcionalidades:"
                : "Functionalities:"}
            </h3>

            <details>
              <summary className="ml-4 mt-2">
                {!isMobile && (
                  <span className="font-semibold border-b-2 border-slate-600 btn-read ml-2 pt-2 cursor-pointer">
                    {language === "Portuguese"
                      ? "Clique aqui para visualizar as funcionalidades"
                      : "Click here to view the features"}
                  </span>
                )}
              </summary>
              <ul>
                <li>
                  {currentProject.functions.map((func, index) => {
                    const [funcName, funcDesc] = func.split(":");
                    return (
                      <div
                        key={index}
                        className="pt-2 text-base font-semibold description pl-2"
                      >
                        <span className="funcName">{funcName}</span>
                        {funcDesc && (
                          <span className="funcDesc">: {funcDesc}</span>
                        )}
                      </div>
                    );
                  })}
                </li>
              </ul>
            </details>
          </div>

          <div
            className="xl:w-2/4 pt-5 min-h-96 "
            style={{
              maxHeight: !readFunc && isOverflowing ? "90px" : "100%",
              overflow: !readFunc && isOverflowing ? "hidden" : "visible",
              transition: "max-height 0.3s ease-in-out",
            }}
            id="tech"
            ref={techRef}
          >
            <h3 className="text-xl font-semibold">
              {language === "Portuguese" ? "Tecnologias:" : "Technologies"}
            </h3>
            {currentProject.technologies.map((tech, index) => {
              const [techName, techDesc] = tech.split(":");
              return (
                <div
                  key={index}
                  className="pt-1 text-base font-semibold description pl-2"
                >
                  <span className="techName">{techName}</span>
                  {techDesc && <span className="techDesc">: {techDesc}</span>}
                </div>
              );
            })}
          </div>
          {!isMobile && isOverflowing && (
            <button
              onClick={handleReadFunc}
              className="font-semibold border-b-2 border-slate-600 btn-read ml-2 pt-2"
            >
              {readFunc ? "Ver Menos" : "Ver Mais"}
            </button>
          )}
            </div>

            <div className="detalhe__midia">
            <div className="relative">
              {Array.isArray(currentProject.image) &&
                currentProject.image.length > 0 && (
                  <Image
                    src={currentProject.image[currentImageIndex]}
                    alt={`${currentProject.title} - ${currentImageIndex + 1}`}
                    width={600}
                    height={250}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-2xl bg-cover img-content"
                  />
                )}
              <div className="galeria-nav">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentImageIndex === 0}
                  aria-label={language === "Portuguese" ? "Imagem anterior" : "Previous image"}
                  className="galeria-btn"
                >
                  ‹
                </button>
                <span className="galeria-contador" aria-live="polite">
                  {currentImageIndex + 1} / {currentProject.image.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={
                    currentImageIndex === currentProject.image.length - 1
                  }
                  aria-label={language === "Portuguese" ? "Próxima imagem" : "Next image"}
                  className="galeria-btn"
                >
                  ›
                </button>
              </div>
            </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          {language === "Portuguese"
            ? "Erro: Nenhum projeto disponível"
            : "Error: project not found"}
        </div>
      )}
    </div>
  );
};

export default ContentProject;
