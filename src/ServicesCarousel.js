import React, { useState, useEffect } from "react";
import { services } from "./data";

function ServicesCarousel() {
  const [current, setCurrent] = useState(0);
  const showCards = window.innerWidth < 768 ? 1 : 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + showCards) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [showCards]);

  return (
    <section className="carousel" id="services">
      {services
        .slice(current, current + showCards)
        .concat(
          current + showCards > services.length
            ? services.slice(0, (current + showCards) % services.length)
            : []
        )
        .map((service) => (
          <div className="service-card" key={service.id}>
            <span style={{ fontSize: "2rem" }}>{service.icon}</span>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <div>{service.price}</div>
            <button className="cta-button">Book Now</button>
          </div>
        ))}
    </section>
  );
}
export default ServicesCarousel;
