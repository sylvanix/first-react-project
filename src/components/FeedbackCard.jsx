import React from "react";
import "./FeedbackCard.css";

function FeedbackCard({ name, message, avatar }) {
  return (
    <div className="feedback-card">
      <img src={avatar} alt={`Photo de ${name}`} className="avatar" />
      <p className="message">"{message}"</p>
      <p className="name">— {name}</p>
    </div>
  );
}

export default FeedbackCard;
