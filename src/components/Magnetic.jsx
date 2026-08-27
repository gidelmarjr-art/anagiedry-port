import React, { useCallback, useRef } from "react";

/** Botão/link que se desloca sutilmente em direção ao cursor. */
export function Magnetic({ children, strength = 0.35, className = "", as: Tag = "a", ...rest }) {
  const ref = useRef(null);

  const onMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }, []);

  return (
    <Tag
      ref={ref}
      data-cursor="link"
      className={"magnetic " + className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
