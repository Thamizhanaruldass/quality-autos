import React from "react";

function HeroBanner() {
  return (
    <section className="hero-banner" id="home" style={{
      background: 'url(https://via.placeholder.com/1200x400?text=Auto+Rickshaw+Repair)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <h1>Expert 3-Wheeler Repair Services</h1>
      <p>Professional auto-rickshaw maintenance and repair services</p>
      <div>
        <span>⭐ 4.5/5 based on customer reviews</span>
      </div>
      <button className="cta-button" style={{ marginTop: '20px' }}>
        Book Service Now
      </button>
    </section>
  );
}

export default HeroBanner;
