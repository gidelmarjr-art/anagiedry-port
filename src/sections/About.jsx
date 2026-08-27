import React from "react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { StickyStory } from "../components/StickyStory.jsx";
import about1 from "../assets/images/about-1.jpg";
import about2 from "../assets/images/about-2.jpg";
import about3 from "../assets/images/about-3.jpg";
import about4 from "../assets/images/about-4.jpg";

const STORY_STEPS = [
  {
    img: about1,
    alt: "Ana Giedry sorrindo segurando o jaleco de Nutrição",
    title: "Escuta antes de planilha.",
    text: "Antes de qualquer plano, eu quero entender sua rotina, seu histórico e sua relação com a comida.",
  },
  {
    img: about2,
    alt: "Ana Giedry, nutricionista, retrato confiante",
    title: "Ciência aplicada ao seu dia a dia.",
    text: "Cada orientação parte de evidência atualizada — traduzida pra caber na sua realidade, não numa planilha genérica.",
  },
  {
    img: about3,
    alt: "Ana Giedry de perfil, sorrindo",
    title: "Resultados que duram, não que terminam.",
    text: "O objetivo não é uma dieta com prazo de validade. É uma relação com a comida que continua depois da consulta.",
  },
  {
    img: about4,
    alt: "Ana Giedry vestindo jaleco branco bordado com seu nome e a especialidade Nutrição",
    title: "Você não está sozinha nesse processo.",
    text: "O acompanhamento continua entre as consultas — com escuta, ajuste de rota e presença de verdade.",
  },
];

export function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-intro">
        <Reveal>
          <Eyebrow dark>Sobre</Eyebrow>
          <h2 className="about-heading">
            Nutrição é ciência aplicada à sua vida — não uma régua sobre o seu prato.
          </h2>
        </Reveal>
      </div>
      <StickyStory steps={STORY_STEPS} />
    </section>
  );
}
