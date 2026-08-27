"use client";

import Header from "./components/header";
import SectionHome from "./components/section-home";
import SectionAboutMe from "./components/section-about-me";
import SectionSkills from "./components/section-skills";
import SectionProjects from "./components/section-projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionHome />
        <SectionAboutMe />
        <SectionSkills />
        <SectionProjects />
      </main>
      <Footer />
    </>
  );
}
