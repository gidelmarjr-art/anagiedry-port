import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { SplitWords } from "../components/SplitWords.jsx";
import { LabelRow } from "../components/LabelRow.jsx";
import { Magnetic } from "../components/Magnetic.jsx";
import { Reveal, FadeReveal } from "../components/Reveal.jsx";
import { WHATSAPP_LINK } from "../constants/contact.js";
import heroImg from "../assets/images/hero.jpg";

export function Hero() {
  return (
    <section id="topo" className="hero-section">
      <div className="hero-grid">
        <div>
          <div className="hero-loaded">
            <Eyebrow>Nutricionista</Eyebrow>
            <h1 className="hero-title">
              <SplitWords text="Comida de verdade," />
              <br />
              <SplitWords text="plano sob medida." italicWords={["sob", "medida."]} />
            </h1>
          </div>

          <Reveal delay={500}>
            <p className="hero-copy">
              Atendimento nutricional individualizado, guiado por ciência e pela sua rotina real —
              sem dieta genérica, sem lista de proibidos, sem culpa no prato.
            </p>
            <div className="hero-ctas">
              <Magnetic
                as="a"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                strength={0.3}
              >
                Agendar consulta <ArrowUpRight size={16} />
              </Magnetic>
              <Magnetic as="a" href="#metodo" className="btn-ghost" strength={0.3}>
                Conhecer o método
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="hero-label-panel">
              <div className="hero-label-title">INFORMAÇÕES DO ATENDIMENTO</div>
              <LabelRow k="Formação" v="Nutrição" thick />
              <LabelRow k="Foco" v="Individualizado" />
              <LabelRow k="Formato" v="Presencial · Online" />
            </div>
          </Reveal>
        </div>

        <FadeReveal delay={250}>
          <div className="hero-photo-wrap">
            <div className="hero-badge">
              ATENDIMENTO
              <br />
              NUTRIÇÃO
            </div>
            <img
              src={heroImg}
              alt="Ana Giedry, nutricionista, sorrindo ao ar livre com jaleco branco de Nutrição sobre o ombro"
              className="hero-photo"
            />
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}
