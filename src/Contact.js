import React from "react";
import { contact, workingHours } from "./data";

function Contact() {
  return (
    <section id="contact" style={{ padding: "40px 20px", background: "#f1f8e9", maxWidth: 600, margin: "auto" }}>
      <h2>Contact Us</h2>
      <p><strong>Address:</strong> {contact.address}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>WhatsApp:</strong> {contact.whatsapp}</p>
      <p><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
      <p><strong>Working Hours:</strong> {workingHours.days}, {workingHours.hours}</p>
    </section>
  );
}

export default Contact;
