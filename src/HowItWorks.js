import React from "react";

const steps = [
  "Book Your Service - Choose from our range of services",
  "Free Pickup - We collect your auto-rickshaw from your location",
  "Expert Repair - Skilled mechanics handle all repairs",
  "Quality Check - Thorough inspection before return",
  "Free Drop - We deliver your vehicle back to you",
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#e3f2fd" }}>
      <h2>How It Works</h2>
      <ol style={{ maxWidth: 600, margin: "auto", textAlign: "left" }}>
        {steps.map((step, idx) => (
          <li key={idx} style={{ margin: "15px 0", fontSize: "18px" }}>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HowItWorks;
