import React from "react";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import { WHATSAPP_LINK, INSTAGRAM_LINK, INSTAGRAM_HANDLE, EMAIL_LINK } from "../constants/contact.js";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <span className="footer-logo">Ana Giedry</span>
            <span className="footer-tag">NUTRIÇÃO CONSCIENTE</span>
          </div>
          <div className="footer-cols">
            <div>
              <div className="footer-col-title">CONTATO</div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-cursor="link" className="footer-icon">
                <MessageCircle size={17} /> Agendar pelo WhatsApp
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" data-cursor="link" className="footer-icon">
                <Instagram size={17} /> {INSTAGRAM_HANDLE}
              </a>
              <a href={EMAIL_LINK} data-cursor="link" className="footer-icon">
                <Mail size={17} /> Enviar e-mail
              </a>
            </div>
            <div>
              <div className="footer-col-title">NAVEGAÇÃO</div>
              <a href="#sobre" data-cursor="link" className="footer-link">Sobre</a>
              <a href="#metodo" data-cursor="link" className="footer-link">Método</a>
              <a href="#servicos" data-cursor="link" className="footer-link">Serviços</a>
              <a href="#contato" data-cursor="link" className="footer-link">Contato</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Ana Giedry Nutrição. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
