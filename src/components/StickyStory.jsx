import React, { useEffect, useRef, useState } from "react";

/**
 * "Sobre" em scrollytelling: a foto fica fixa (sticky) enquanto o
 * texto passa, e troca sozinha conforme o bloco ativo muda.
 * `steps`: [{ img, alt, title, text }]
 */
export function StickyStory({ steps }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observers = steps.map((_, i) => {
      const el = refs.current[i];
      if (!el) return null;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(i);
          });
        },
        { threshold: 0, rootMargin: "-42% 0px -42% 0px" }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io && io.disconnect());
  }, [steps.length]);

  return (
    <div className="story-grid">
      <div className="story-sticky">
        <div className="story-image-stack">
          {steps.map((s, i) => (
            <img key={i} src={s.img} alt={s.alt} className={"story-image" + (active === i ? " story-image-active" : "")} />
          ))}
        </div>
        <div className="story-progress">
          {steps.map((_, i) => (
            <span key={i} className={"story-dot" + (active === i ? " story-dot-active" : "")} />
          ))}
        </div>
      </div>

      <div className="story-text">
        {steps.map((s, i) => (
          <div key={i} ref={(el) => (refs.current[i] = el)} className={"story-block" + (active === i ? " story-block-active" : "")}>
            <span className="story-index">0{i + 1}</span>
            <h3 className="story-title">{s.title}</h3>
            <p className="story-copy">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
