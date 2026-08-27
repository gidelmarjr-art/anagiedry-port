import React from "react";
import { X } from "lucide-react";
import { Magnetic } from "./Magnetic.jsx";
import { COLORS } from "../constants/colors.js";
import { NAV_LINKS } from "../data/content.js";
import { INSTAGRAM_LINK, INSTAGRAM_HANDLE } from "../constants/contact.js";

export function FullscreenMenu({ open, onClose }) {
  return (
    <div className={"menu-overlay" + (open ? " menu-overlay-open" : "")}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 28px" }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: COLORS.cream }}>Ana Giedry</span>
        <Magnetic as="button" onClick={onClose} className="menu-close" strength={0.4}>
          <X size={26} />
        </Magnetic>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "0 40px" }}>
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            data-cursor="link"
            onClick={onClose}
            className="menu-link"
            style={{ transitionDelay: open ? `${90 + i * 60}ms` : "0ms" }}
          >
            <span className="menu-link-index">0{i + 1}</span>
            {l.label}
          </a>
        ))}
      </nav>

      <div
        style={{
          padding: "28px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          borderTop: "1px solid rgba(252,250,244,0.15)",
        }}
      >
        <span style={{ color: COLORS.cream, opacity: 0.6, fontFamily: "'Archivo', sans-serif", fontSize: 12.5 }}>
          Nutricionista
        </span>
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          style={{ color: COLORS.gold, fontFamily: "'Archivo', sans-serif", fontSize: 12.5, textDecoration: "none" }}
        >
          {INSTAGRAM_HANDLE}
        </a>
      </div>
    </div>
  );
}
