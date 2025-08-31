import React, { useState, useEffect } from "react";
import { offers } from "./data";

function OffersCarousel() {
  const [current, setCurrent] = useState(0);
  const showCards = window.innerWidth < 768 ? 1 : 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const displayedOffers = offers
    .slice(current, current + showCards)
    .concat(
      current + showCards > offers.length
        ? offers.slice(0, (current + showCards) % offers.length)
        : []
    );

  return (
    <section className="carousel" id="offers" style={{ background: "#f0f8ff", padding: "20px 0" }}>
      {displayedOffers.map((offer) => (
        <div className="offer-card" key={offer.id} style={{ border: "2px solid #fca311", padding: "16px", borderRadius: "10px" }}>
          <h4 style={{ color: "#fca311" }}>{offer.title}</h4>
          <p>{offer.description}</p>
          <p><strong>Discount:</strong> {offer.discount}</p>
          <p><small>{offer.validity}</small></p>
        </div>
      ))}
    </section>
  );
}

export default OffersCarousel;
