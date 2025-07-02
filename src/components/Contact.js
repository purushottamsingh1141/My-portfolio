import React, { useState } from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    // Add form handling logic here
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>Have You Any Questions?</p>
        <p>I'M AT YOUR SERVICE</p>

        <div className="contact-grid">
          <div className="contact-box">
            <FaPhoneAlt />
            <h4>Call Us On</h4>
            <p>+91 7520192439</p>
          </div>
          <div className="contact-box">
            <FaMapMarkerAlt />
            <h4>Home</h4>
            <p>Bihar, India</p>
          </div>
          <div className="contact-box">
            <FaEnvelope />
            <h4>Email</h4>
            <p>purushottamsingh1141@gmail.com</p>
          </div>
          <div className="contact-box">
            <FaGlobe />
            <h4>Website</h4>
            <a
              href="http://my-portfolio-two-omega-66.vercel.app/"
              style={{ color: "white", textDecoration: "none" }}
            >
              My Website
            </a>
          </div>
        </div>
      </div>

      <div className="email-section">
        <h3>SEND ME AN EMAIL</h3>
        <p>I'M VERY RESPONSIVE TO MESSAGES</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
