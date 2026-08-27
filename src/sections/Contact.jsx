import React from "react";
import { MessageCircle, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { COLORS } from "../constants/colors.js";
import { WHATSAPP_LINK, INSTAGRAM_LINK, INSTAGRAM_HANDLE, EMAIL_LINK, EMAIL_ADDRESS } from "../constants/contact.js";

const CHANNELS = [
  {
    key: "whatsapp",
    icon: <MessageCircle size={26} />,
    title: "WhatsApp",
    detail: "Resposta rápida, direto com a Ana",
    cta: "Agendar consulta",
    href: WHATSAPP_LINK,
    color: COLORS.forest,
    external: true,
  },
  {
    key: "instagram",
    icon: <Instagram size={26} />,
    title: "Instagram",
    detail: INSTAGRAM_HANDLE,
    cta: "Ver o perfil",
    href: INSTAGRAM_LINK,
    color: COLORS.berry,
    external: true,
  },
  {
    key: "email",
    icon: <Mail size={26} />,
    title: "E-mail",
    detail: EMAIL_ADDRESS,
    cta: "Enviar e-mail",
    href: EMAIL_LINK,
    color: COLORS.gold,
    external: false,
  },
];

export function Contact() {
  return (
    <section id="contato" className="contact-section">
      <Reveal>
        <Eyebrow>Contato</Eyebrow>
        <h2 className="section-heading">Escolha o canal que for mais fácil pra você.</h2>
      </Reveal>

      <div className="contact-grid">
        {CHANNELS.map((c, i) => (
          <Reveal key={c.key} delay={i * 100}>
            <a
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              data-cursor="link"
              className={"contact-card contact-card-" + c.key}
              style={{ "--accent": c.color }}
            >
              <span className="contact-icon">{c.icon}</span>
              <span className="contact-title">{c.title}</span>
              <span className="contact-detail">{c.detail}</span>
              <span className="contact-cta">
                {c.cta} <ArrowUpRight size={15} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
