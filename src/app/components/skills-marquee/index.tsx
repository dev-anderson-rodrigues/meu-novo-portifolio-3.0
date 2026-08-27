"use client";

import React from "react";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiAxios,
  SiMui,
  SiEslint,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiTypeorm,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSwagger,
  SiJsonwebtokens,
  SiJest,
  SiN8N,
  SiInsomnia,
  SiVercel,
  SiNetlify,
  SiRailway,
} from "react-icons/si";

type Tech = { name: string; Icon: IconType };

// Faixa A — front-end, linguagens e ferramentas de código
const laneA: Tech[] = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss3 },
  { name: "Vite", Icon: SiVite },
  { name: "Material UI", Icon: SiMui },
  { name: "Axios", Icon: SiAxios },
  { name: "ESLint", Icon: SiEslint },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
];

// Faixa B — back-end, dados e automação
const laneB: Tech[] = [
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "NestJS", Icon: SiNestjs },
  { name: "n8n", Icon: SiN8N },
  { name: "Express", Icon: SiExpress },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "TypeORM", Icon: SiTypeorm },
  { name: "JWT", Icon: SiJsonwebtokens },
  { name: "Swagger", Icon: SiSwagger },
  { name: "Jest", Icon: SiJest },
  { name: "Insomnia", Icon: SiInsomnia },
  { name: "Vercel", Icon: SiVercel },
  { name: "Netlify", Icon: SiNetlify },
  { name: "Railway", Icon: SiRailway },
];

const Item = ({ name, Icon }: Tech) => (
  <li className="skill-item">
    <Icon className="skill-icon" aria-hidden="true" focusable="false" />
    <span>{name}</span>
  </li>
);

type LaneProps = {
  items: Tech[];
  reverse?: boolean;
  label: string;
  speedVar: string;
};

const Lane = ({ items, reverse, label, speedVar }: LaneProps) => (
  <div className="marquee" role="group" aria-label={label}>
    <ul
      className={`marquee-track${reverse ? " is-reverse" : ""}`}
      style={{ animationDuration: `var(${speedVar})` }}
    >
      {items.map((t) => (
        <Item key={t.name} {...t} />
      ))}
      {/* Cópia para o loop emendar sem corte. Escondida de leitores
          de tela para os nomes não serem anunciados duas vezes. */}
      {items.map((t) => (
        <li className="skill-item" key={`dup-${t.name}`} aria-hidden="true">
          <t.Icon className="skill-icon" aria-hidden="true" focusable="false" />
          <span>{t.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsMarquee = ({ language }: { language: string }) => {
  const pt = language === "Portuguese";

  return (
    <div className="marquee-wrap">
      <Lane
        items={laneA}
        label={pt ? "Front-end e linguagens" : "Front-end and languages"}
        speedVar="--marquee-a"
      />
      <Lane
        items={laneB}
        reverse
        label={pt ? "Back-end, dados e automação" : "Back-end, data and automation"}
        speedVar="--marquee-b"
      />
    </div>
  );
};

export default SkillsMarquee;
