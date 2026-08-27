import React from "react";
import { COLORS } from "../constants/colors.js";

/** Título cinético: cada palavra entra deslizando de baixo pra cima. */
export function SplitWords({ text, italicWords = [] }) {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline" }}>
      {words.map((w, i) => (
        <span key={i} className="split-word" style={{ transitionDelay: `${i * 55}ms` }}>
          <span
            style={{
              fontStyle: italicWords.includes(w) ? "italic" : "normal",
              color: italicWords.includes(w) ? COLORS.berry : "inherit",
            }}
          >
            {w}
          </span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
