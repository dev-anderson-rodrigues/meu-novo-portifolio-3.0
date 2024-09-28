"use client";

import Component_Nav from "./components/component-nav";

export default function Home() {
  return (
    <>
      <header className="w-screen fixed top-0 h-16  items-center flex justify-center">
        <div className="flex justify-between items-center p-4 w-full max-w-screen-xl">
          <h1 className=" text-lg">
            <p>Anderson Rodrigues</p>
            <p>Desenvolvedor Full Stack</p>
          </h1>
          <Component_Nav />
        </div>
      </header>
      <main>
        <section
          className=" w-full min-h-screen pt-16 items-center flex justify-center"
          id="home"
        >
          <div className=" p-4 w-full h-screen  max-w-screen-xl">inicio</div>
        </section>
        <section
          className=" w-full min-h-screen  items-center flex justify-center pt-16"
          id="about-me"
        >
          <div className="p-4 w-full h-screen max-w-screen-xl">sobre mim</div>
        </section>
        <section
          className=" w-full min-h-screen  items-center flex justify-center pt-16"
          id="skills"
        >
          <div className="p-4 w-full h-screen max-w-screen-xl">habilidades</div>
        </section>
        <section
          className=" w-full min-h-screen  items-center flex justify-center pt-16"
          id="projects"
        >
          <div className="p-4 w-full h-screen max-w-screen-xl">projetos</div>
        </section>
      </main>
      <footer
        className=" w-full min-h-52  items-center flex justify-center"
        id="contact"
      >
        <div className=" p-4 w-full max-w-screen-xl">contato</div>
      </footer>
    </>
  );
}
