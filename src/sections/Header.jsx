import React from "react";
import { Magnetic } from "../components/Magnetic.jsx";
import { NAV_LINKS } from "../data/content.js";
import { WHATSAPP_LINK } from "../constants/contact.js";

export function Header({ onOpenMenu }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#topo" data-cursor="link" className="logo">
          <span className="logo-name">Ana Giedry</span>
          <span className="logo-tag">NUTRIÇÃO</span>
        </a>

        <nav className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.label} className="nav-link" data-cursor="link" href={l.href}>
              {l.label}
            </a>
          ))}
          <Magnetic
            as="a"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            strength={0.3}
          >
            Agendar consulta
          </Magnetic>
        </nav>

        <button className="menu-btn mobile-toggle" data-cursor="link" onClick={onOpenMenu}>
          Menu
          <span className="menu-btn-lines">
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
