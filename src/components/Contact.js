import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.12, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Controls + inView to re-trigger on every visit
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.25 }); // 25% visible to trigger
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      // reset when leaving so it can animate again next time
      controls.start("hidden");
    }
  }, [inView, controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    // form handling logic here
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className="contact-header" variants={itemVariants}>
        <h2>Contact Me</h2>
        <p>Have You Any Questions?</p>
        <p>I'M AT YOUR SERVICE</p>

        <div className="contact-grid">
          <motion.div
            className="contact-box"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FaPhoneAlt />
            <h4>Call Us On</h4>
            <p>+91 7520192439</p>
          </motion.div>

          <motion.div
            className="contact-box"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FaMapMarkerAlt />
            <h4>Home</h4>
            <p>Bihar, India</p>
          </motion.div>

          <motion.div
            className="contact-box"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope />
            <h4>Email</h4>
            <p>purushottamsingh1141@gmail.com</p>
          </motion.div>

          <motion.div
            className="contact-box"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FaGlobe />
            <h4>Website</h4>
            <a
              href="http://my-portfolio-two-omega-66.vercel.app/"
              style={{ color: "white", textDecoration: "none" }}
            >
              My Website
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="email-section" variants={itemVariants}>
        <h3>SEND ME AN EMAIL</h3>
        <p>I'M VERY RESPONSIVE TO MESSAGES</p>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            variants={itemVariants}
          />
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            variants={itemVariants}
          />
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            variants={itemVariants}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
