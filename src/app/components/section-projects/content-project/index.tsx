"use client";

import { useLanguage, useProject } from "@/app/contexts";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Separa "Next.js: framework React" em nome e descrição. Metade dos
 * projetos lista a stack como nome puro ("React", "Axios") e a outra
 * metade como par nome/descrição — o layout precisa aguentar as duas
 * formas sem virar uma coisa diferente em cada projeto.
 *
 * O split é no primeiro ":" apenas, senão "GET /users: retorna..."
 * perderia o resto do texto.
 */
const separar = (linha: string) => {
  const i = linha.indexOf(":");
  if (i === -1) return { nome: linha.trim(), desc: "" };
  return { nome: linha.slice(0, i).trim(), desc: linha.slice(i + 1).trim() };
};

const ContentProject = () => {
  const { project, setSelectedProject } = useProject();
  const { language } = useLanguage();
  const currentProject = project[0];
  const pt = language === "Portuguese";

  // Começa sempre na primeira captura. Não existe efeito para
  // reposicionar ao trocar de projeto: o componente é montado com a
  // chave do projeto, então trocar de projeto monta um painel novo e
  // o estado nasce zerado sozinho.
  const [imagem, setImagem] = useState(0);

  const fechar = useCallback(() => setSelectedProject(""), [setSelectedProject]);

  // Fechar com Esc é o gesto que todo mundo tenta primeiro num painel
  // que ocupa a seção inteira.
  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [fechar]);

  /**
   * O card que abre pode estar na quarta linha da grade, e a expansão
   * empurra tudo que vem depois — sem isso o conteúdo cresce fora do
   * campo de visão e parece que nada aconteceu.
   */
  const aoMontar = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    requestAnimationFrame(() =>
      el.scrollIntoView({
        /*
          "nearest" fazia o mínimo de rolagem possível, e num painel
          mais alto que a tela o mínimo é encostar a base — a pessoa
          chegava no meio do conteúdo. "start" alinha o topo, e o
          scroll-margin do painel desconta o cabeçalho fixo.

          O comportamento é instantâneo, não suave, e isso é
          deliberado: o navegador cancela rolagem programática suave
          assim que percebe rolagem do usuário, e num toque de dedo a
          inércia do gesto ainda está correndo quando o painel monta.
          A animação era interrompida no meio e a pessoa parava em
          qualquer lugar — falha que só aparece com gesto real, nunca
          num teste automatizado, onde não há inércia competindo.

          O painel já entra com animação própria, então o salto não
          fica seco.
        */
        block: "start",
        behavior: "auto",
      })
    );
  }, []);

  if (!currentProject) return null;

  const imagens = Array.isArray(currentProject.image)
    ? currentProject.image
    : [];
  const tecnologias = currentProject.technologies.map(separar);
  const funcoes = currentProject.functions.filter(Boolean).map(separar);
  const temDescricao = tecnologias.some((t) => t.desc);

  return (
    <article className="projeto" ref={aoMontar}>
      {/* A faixa acompanha a rolagem para o botão não sumir de vista
          num painel longo. */}
      <div className="projeto__barra">
        <button
          type="button"
          onClick={fechar}
          className="projeto__fechar"
          aria-label={pt ? "Fechar detalhes" : "Close details"}
        >
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path
              d="M4 4l8 8M12 4l-8 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <header className="projeto__cabecalho">
        <p className="projeto__rotulo">{pt ? "Projeto" : "Project"}</p>
        <h3 className="projeto__titulo">{currentProject.title}</h3>

        <ul className="projeto__stack">
          {tecnologias.map((t) => (
            <li key={t.nome}>{t.nome}</li>
          ))}
        </ul>

        {currentProject.url && (
          <a
            className="projeto__link"
            href={currentProject.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {pt ? "Ver no GitHub" : "View on GitHub"}
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path
                d="M6 3h7v7M13 3 4 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </header>

      <div className="projeto__topo">
        {imagens.length > 0 && (
          <figure className="projeto__galeria">
            <Image
              src={imagens[imagem]}
              alt={`${currentProject.title} — ${imagem + 1} de ${imagens.length}`}
              width={1200}
              height={750}
              quality={90}
              sizes="(max-width: 1024px) 92vw, 620px"
              className="projeto__captura"
            />

            {imagens.length > 1 && (
              <div className="projeto__miniaturas">
                {imagens.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setImagem(i)}
                    aria-current={i === imagem}
                    aria-label={`${pt ? "Imagem" : "Image"} ${i + 1}`}
                    className="projeto__miniatura"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={160}
                      height={100}
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            )}
          </figure>
        )}

        <div className="projeto__sobre">
          <h4 className="projeto__secao">{pt ? "Sobre" : "About"}</h4>
          <p className="projeto__descricao">{currentProject.description}</p>
        </div>
      </div>

      <section className="projeto__bloco">
        <h4 className="projeto__secao">
          {pt ? "Tecnologias" : "Technologies"}
          <span className="projeto__contagem">{tecnologias.length}</span>
        </h4>

        {/* Com descrição cada item precisa de duas linhas e vira cartão;
            sem descrição são só nomes e cartão seria caixa vazia com um
            rótulo dentro. Uma classe decide, o mesmo HTML serve. */}
        <ul
          className={
            temDescricao ? "projeto__tecnologias" : "projeto__tecnologias--curta"
          }
        >
          {tecnologias.map((t) => (
            <li key={t.nome}>
              <strong>{t.nome}</strong>
              {t.desc && <span>{t.desc}</span>}
            </li>
          ))}
        </ul>
      </section>

      {funcoes.length > 0 && (
        <section className="projeto__bloco">
          <h4 className="projeto__secao">
            {pt ? "Funcionalidades" : "Features"}
            <span className="projeto__contagem">{funcoes.length}</span>
          </h4>

          {/* Estava atrás de um <details> com "Clique aqui para
              visualizar", mais um "Ver Mais" que só aparecia acima de
              1280px: dois cliques e uma medição de altura para ler o
              que o projeto faz. Em colunas cabe tudo aberto. */}
          <ul className="projeto__funcoes">
            {funcoes.map((f, i) => (
              <li key={`${f.nome}-${i}`}>
                <strong>{f.nome}</strong>
                {f.desc && <span>{f.desc}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};

export default ContentProject;
