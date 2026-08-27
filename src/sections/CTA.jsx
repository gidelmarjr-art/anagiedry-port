import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Magnetic } from "../components/Magnetic.jsx";
import { WHATSAPP_LINK } from "../constants/contact.js";

export function CTA() {
  return (
    <section className="cta-band">
      <Reveal>
        <Eyebrow dark>Comece agora</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="cta-heading">O primeiro passo é marcar uma conversa.</h2>
      </Reveal>
      <Reveal delay={160}>
        <Magnetic
          as="a"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary cta-btn"
          strength={0.3}
        >
          Agendar consulta <ArrowUpRight size={18} />
        </Magnetic>
      </Reveal>
    </section>
  );
}
