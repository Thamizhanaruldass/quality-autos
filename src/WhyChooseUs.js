import React from "react";

const reasons = [
  "Specialized 3-Wheeler Experts",
  "Genuine Spare Parts",
  "30-Day Warranty",
  "Free Pickup & Drop",
  "Affordable Pricing",
  "Quick Service"
];

function WhyChooseUs() {
  return (
    <section id="about" style={{ padding: "40px 20px", backgroundColor: "#e0f7fa", textAlign: "center" }}>
      <h2>Why Choose Us</h2>
      <ul style={{ maxWidth: 600, margin: "auto", listStyleType: "none", padding: 0 }}>
        {reasons.map((r, idx) => (
          <li key={idx} style={{ margin: "10px 0", fontSize: "18px" }}>✔️ {r}</li>
        ))}
      </ul>
    </section>
  );
}

export default WhyChooseUs;
