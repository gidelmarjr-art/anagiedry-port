import React from "react";
import { useReveal } from "../hooks/useReveal.js";

/** Fade + leve translateY ao entrar na viewport. */
export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={"reveal" + (visible ? " reveal-visible" : "")}
      style={{ transitionDelay: delay + "ms", ...style }}
    >
      {children}
    </div>
  );
}

/** Revela uma imagem com um wipe via clip-path. */
export function RevealClip({ children, delay = 0 }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={"clip-reveal" + (visible ? " clip-reveal-visible" : "")}
      style={{ transitionDelay: delay + "ms" }}
    >
      {children}
    </div>
  );
}

/** Fade puro (só opacidade, sem deslocamento). */
export function FadeReveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={"fade-reveal" + (visible ? " fade-reveal-visible" : "")}
      style={{ transitionDelay: delay + "ms" }}
    >
      {children}
    </div>
  );
}
