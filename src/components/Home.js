import React from "react";
import "./Home.css";
import profilePic from "./pp.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="hero" id="home">
      {/* Text Section */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h3>
          Hello, my name is <span className="highlight">Purushottam Singh</span>
        </h3>
        <h1>
          I’m a{" "}
          <motion.span
            className="web-designer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Web Developer
          </motion.span>
          <span className="cursor">|</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          I’m a web developer with experience in creating stylish, responsive
          front-end projects. My expertise is in React, HTML, CSS, and
          JavaScript.
        </motion.p>

        <motion.a
          className="btn"
          href="#about"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: false }}
        >
          More About Me
        </motion.a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="home-image-wrapper"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src={profilePic} alt="Profile" className="home-profile-img" />
        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>
      </motion.div>
    </section>
  );
};

export default Home;
