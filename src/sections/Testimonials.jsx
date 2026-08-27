import React from "react";
import { Star } from "lucide-react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { TESTIMONIALS } from "../data/content.js";
import { COLORS } from "../constants/colors.js";

function initials(name) {
  return name.split(" ").map((p) => p[0]).join("");
}

export function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <Reveal>
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="section-heading" style={{ marginBottom: 10 }}>O que dizem de perto.</h2>
          <p className="testimonials-note">
            Exemplo de layout — substitua pelos depoimentos reais das pacientes.
          </p>
        </Reveal>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="testi-card">
                <div style={{ display: "flex", gap: 3, color: COLORS.gold }}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill={COLORS.gold} strokeWidth={0} />
                  ))}
                </div>
                <p className="testi-quote">"{t.text}"</p>
                <div className="testi-author">
                  <span className="testi-avatar">{initials(t.name)}</span>
                  <span className="testi-name">
                    <strong>{t.name}</strong>
                    <span style={{ opacity: 0.6 }}> · {t.role}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
