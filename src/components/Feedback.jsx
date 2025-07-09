import React from "react";
import "./Feedback.css";
import FeedbackCard from "./FeedbackCard";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

function Feedback() {
  const feedbacks = [
    {
      name: "Alice Dupont",
      message: "Un service rapide et professionnel, je recommande à 100% !",
      avatar: avatar1,
    },
    {
      name: "Jean Morel",
      message: "Une équipe à l’écoute et un résultat de qualité. Merci !",
      avatar: avatar2,
    },
    {
      name: "Fatou B.",
      message: "Mon projet a été livré dans les délais et avec excellence.",
      avatar: avatar3,
    },
  ];

  return (
    <section id="feedback" className="feedback">
      <h2>Ce que disent nos clients</h2>
      <div className="feedback-list">
        {feedbacks.map((fb, index) => (
          <FeedbackCard
            key={index}
            name={fb.name}
            message={fb.message}
            avatar={fb.avatar}
          />
        ))}
      </div>
    </section>
  );
}

export default Feedback;
