import React from "react";
import { Sprout, Leaf, HeartPulse } from "lucide-react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { LabelRow } from "../components/LabelRow.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Magnetic } from "../components/Magnetic.jsx";
import { SERVICES } from "../data/content.js";
import { WHATSAPP_LINK } from "../constants/contact.js";

const ICONS = {
  avaliacao: <Sprout size={22} />,
  continuo: <Leaf size={22} />,
  especializado: <HeartPulse size={22} />,
};

export function Services() {
  return (
    <section id="servicos" className="services-section">
      <div className="services-inner">
        <Reveal>
          <Eyebrow>Serviços</Eyebrow>
          <h2 className="section-heading">Um formato para cada momento.</h2>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={i * 100}>
              <div className="service-card">
                <div className="service-icon">{ICONS[s.key]}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div>
                  {s.rows.map(([k, v], idx) => (
                    <LabelRow key={k} k={k} v={v} thick={idx === 0} />
                  ))}
                </div>
                <Magnetic
                  as="a"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost service-cta"
                  strength={0.25}
                >
                  Agendar
                </Magnetic>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
