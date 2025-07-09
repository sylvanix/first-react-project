import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" }); // reset
  };

  return (
    <section id="contact" className="contact">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="exemple@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
