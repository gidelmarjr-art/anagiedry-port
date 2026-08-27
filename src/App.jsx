import React, { useEffect, useState } from "react";
import { IntroCurtain } from "./components/IntroCurtain.jsx";
import { ScrollProgress } from "./components/ScrollProgress.jsx";
import { CustomCursor } from "./components/CustomCursor.jsx";
import { FullscreenMenu } from "./components/FullscreenMenu.jsx";
import { Marquee } from "./components/Marquee.jsx";
import { Header } from "./sections/Header.jsx";
import { Hero } from "./sections/Hero.jsx";
import { About } from "./sections/About.jsx";
import { Method } from "./sections/Method.jsx";
import { Contact } from "./sections/Contact.jsx";
import { Services } from "./sections/Services.jsx";
import { Testimonials } from "./sections/Testimonials.jsx";
import { CTA } from "./sections/CTA.jsx";
import { FAQ } from "./sections/FAQ.jsx";
import { Footer } from "./sections/Footer.jsx";
import { COLORS } from "./constants/colors.js";
import { MARQUEE_PILLARS, MARQUEE_CTA } from "./data/content.js";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="page">
      <IntroCurtain />
      <ScrollProgress />
      <CustomCursor />
      <FullscreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <Header onOpenMenu={() => setMenuOpen(true)} />
      <Hero />

      <div style={{ marginTop: 64 }}>
        <Marquee items={MARQUEE_PILLARS} bg={COLORS.paperDim} fg={COLORS.ink} borderColor={COLORS.line} />
      </div>

      <About />
      <Method />

      <Marquee items={MARQUEE_CTA} bg={COLORS.berry} fg={COLORS.cream} reverse borderColor={COLORS.berrySoft} />

      <Contact />
      <Services />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
