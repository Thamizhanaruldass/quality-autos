import React from "react";
import { testimonials } from "./data";

function Testimonials() {
  return (
    <section id="reviews" style={{ padding: "40px 20px", backgroundColor: "#f9fbe7" }}>
      <h2 style={{ textAlign: "center" }}>Customer Reviews</h2>
      <div style={{ maxWidth: 900, margin: "auto", display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {testimonials.map(({ id, name, rating, comment, location }) => (
          <div key={id} style={{ flex: "1 1 220px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
            <h4>{name} <small style={{ fontWeight: "normal", fontSize: "14px" }}>({location})</small></h4>
            <p>{comment}</p>
            <div>{"⭐".repeat(rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
