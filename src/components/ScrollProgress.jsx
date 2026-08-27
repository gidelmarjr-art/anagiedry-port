import React, { useEffect, useRef } from "react";

/** Barra fina no topo que preenche conforme o progresso do scroll. */
export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let raf;
    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (scrolled / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = pct + "%";
      raf = null;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress-track">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  );
}
