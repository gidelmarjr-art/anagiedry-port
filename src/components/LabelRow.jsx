import React from "react";
import { COLORS } from "../constants/colors.js";

/** Linha no estilo "tabela de informação nutricional". */
export function LabelRow({ k, v, thick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 12,
        padding: "9px 0",
        borderBottom: thick ? `4px solid ${COLORS.ink}` : `1px solid ${COLORS.line}`,
      }}
    >
      <span
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontSize: 12.5,
          letterSpacing: "0.03em",
          color: COLORS.ink,
          opacity: 0.72,
          textTransform: "uppercase",
        }}
      >
        {k}
      </span>
      <span
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 700,
          fontSize: 14,
          color: COLORS.ink,
          textAlign: "right",
        }}
      >
        {v}
      </span>
    </div>
  );
}
