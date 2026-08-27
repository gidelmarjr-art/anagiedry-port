import React from "react";
import { COLORS } from "../constants/colors.js";

export function Eyebrow({ children, dark }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "'Archivo', sans-serif",
        fontSize: 12,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: dark ? COLORS.cream : COLORS.berry,
        opacity: dark ? 0.85 : 1,
        marginBottom: 18,
      }}
    >
      <span
        style={{
          width: 22,
          height: 1.5,
          background: dark ? COLORS.gold : COLORS.berry,
          display: "inline-block",
        }}
      />
      {children}
    </div>
  );
}
