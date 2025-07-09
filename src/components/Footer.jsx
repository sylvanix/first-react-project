import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#hero">Accueil</a>
        <a href="#services">Services</a>
        <a href="#about">À propos</a>
        <a href="#feedback">Avis</a>
        <a href="#contact">Contact</a>
      </div>
      <p className="footer-copy">© {currentYear} MonSite. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
