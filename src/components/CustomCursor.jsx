import React, { useEffect, useRef, useState } from "react";

/** Ponto + anel que seguem o mouse e crescem sobre elementos [data-cursor="link"]. */
export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    setEnabled(!!fine);
    if (!fine) return;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    const over = (e) => {
      if (e.target.closest && e.target.closest('[data-cursor="link"]')) setHover(true);
    };
    const out = (e) => {
      if (e.target.closest && e.target.closest('[data-cursor="link"]')) setHover(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    let raf;
    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18;
      ring.current.y += (pos.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ transform: "translate(-100px,-100px)" }} />
      <div
        ref={ringRef}
        className={"cursor-ring" + (hover ? " cursor-ring-hover" : "")}
        style={{ transform: "translate(-100px,-100px) translate(-50%,-50%)" }}
      />
    </>
  );
}
