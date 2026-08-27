import React from "react";
import { Reveal } from "../components/Reveal.jsx";
import { FAQ_ITEMS } from "../data/content.js";

export function FAQ() {
  return (
    <section id="duvidas" className="faq-section">
      <div className="faq-inner">
        <Reveal>
          <h2 className="faq-heading">Antes de agendar</h2>
        </Reveal>
        {FAQ_ITEMS.map((item, i) => (
          <Reveal key={item.q} delay={i * 70}>
            <details className="faq-item">
              <summary>
                <span className="faq-question">{item.q}</span>
                <span className="faq-plus">+</span>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
