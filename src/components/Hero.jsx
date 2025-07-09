import React from 'react'
import heroImage from '../assets/hero.png'

const Hero = () => {
   return(
   <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Bienvenue sur notre site</h1>
        <p>Nous vous aidons à construire vos projets avec passion et professionnalisme.</p>
        <a href="#services" className="hero-btn">Découvrir nos services</a>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Illustration de l'accueil" />
      </div>
    </section>
  );
}

export default Hero