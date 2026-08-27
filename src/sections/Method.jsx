import React from "react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { PillarPlate } from "../components/PillarPlate.jsx";
import { COLORS } from "../constants/colors.js";

export function Method() {
  return (
    <section id="metodo" className="method-section">
      <Reveal>
        <Eyebrow>Método</Eyebrow>
        <h2 className="section-heading">
          Quatro pilares sustentam <em style={{ color: COLORS.berry, fontStyle: "italic" }}>cada</em> plano.
        </h2>
        <p className="section-subcopy">Passe o cursor sobre o prato para explorar cada um deles.</p>
      </Reveal>
      <Reveal delay={100}>
        <PillarPlate />
      </Reveal>
    </section>
  );
}
