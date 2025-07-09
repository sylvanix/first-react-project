import React from 'react'
import "./Services.css";
import ServiceCard from "./ServicesCard";

const Services = () => {

   const servicesData = [
    {
      title: "Développement Web",
      description: "Création de sites modernes, responsives et performants.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description: "Conception d'interfaces élégantes et centrées utilisateur.",
      icon: "🎨",
    },
    {
      title: "SEO & Marketing",
      description: "Optimisation du référencement naturel et campagnes digitales.",
      icon: "📈",
    },
  ];

    return (
    <section id="services" className="services">
      <h2>Nos Services</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Services