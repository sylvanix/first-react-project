import React from 'react'

const Header = () => {
 return (
    <header className="header">
      <div className="logo">MonSite</div>

      <nav className="nav">
        <ul>
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#feedback">Avis</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header