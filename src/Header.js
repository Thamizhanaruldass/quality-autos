import React from "react";

function Header() {
  return (
    <header className="header">
      <div>
        <strong>AutoCare Express - 3-Wheeler Specialists</strong>
      </div>
      <nav>
        <a href="#home">Home</a> | <a href="#services">Services</a> | <a href="#offers">Offers</a> | <a href="#about">About Us</a> | <a href="#contact">Contact</a> | <a href="#reviews">Reviews</a>
      </nav>
      <div>📞 +91 9442-XXX-XXX</div>
      <button className="cta-button">Book Service Now</button>
    </header>
  );
}
export default Header;
