import React from "react";

export function Marquee({ items, bg, fg, reverse, borderColor }) {
  const content = (
    <>
      {items.map((it, i) => (
        <span key={i} className="marquee-item" style={{ color: fg }}>
          {it}
          <span style={{ margin: "0 28px", opacity: 0.5 }}>✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div
      className="marquee-outer"
      style={{ background: bg, borderTop: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}` }}
    >
      <div className={"marquee-track" + (reverse ? " marquee-reverse" : "")}>
        {content}
        {content}
      </div>
    </div>
  );
}
