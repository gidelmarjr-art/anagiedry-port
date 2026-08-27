import { useEffect, useRef, useState } from "react";

/**
 * Observa quando um elemento entra na viewport e retorna
 * uma ref para anexar e um booleano "visible" (fica true
 * permanentemente após a primeira entrada).
 */
export function useReveal(threshold = 0.15, rootMargin = "0px") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, visible];
}
