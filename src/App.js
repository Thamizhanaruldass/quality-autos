import React from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import ServicesCarousel from "./ServicesCarousel";
import OffersCarousel from "./OffersCarousel";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <ServicesCarousel />
      <OffersCarousel />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
