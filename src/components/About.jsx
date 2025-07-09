import React from "react";
import "./About.css";
import aboutImage from "../assets/about.jpg"; 

function About() {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img src={aboutImage} alt="Notre équipe" />
      </div>
      <div className="about-content">
        <h2>À propos de nous</h2>
        <p>
          Nous sommes une équipe passionnée de développeurs et de designers,
          dédiée à la création de solutions digitales modernes et performantes.
        </p>
        <p>
          Notre mission est d'accompagner nos clients de l'idée jusqu'à la
          réalisation de leurs projets, avec un service humain et personnalisé.
        </p>
      </div>
    </section>
  );
}

export default About;
