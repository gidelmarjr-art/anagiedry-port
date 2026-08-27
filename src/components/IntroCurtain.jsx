import React, { useEffect, useState } from "react";

/** Cortina de entrada: dois painéis se abrem revelando o site. */
export function IntroCurtain() {
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setClosing(true), 420);
    const t2 = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 1250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div className={"intro-curtain" + (closing ? " intro-curtain-closing" : "")}>
      <div className="intro-panel intro-panel-l" />
      <div className="intro-panel intro-panel-r" />
      <span className="intro-word">Ana Giedry</span>
    </div>
  );
}
