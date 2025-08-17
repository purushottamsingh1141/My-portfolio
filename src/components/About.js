import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDownload,
  FaEnvelope,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiBootstrap, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion"; // 👈 Import animation library
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        {/* Left side text */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="about-text">
            Hi, I'm <span className="highlight">Purushottam</span>, a full-stack
            web developer with a strong background in building scalable and
            efficient web applications. I specialize in front-end and back-end
            development using technologies like React, Node.js, MongoDB, and
            JavaScript.
          </p>

          <a href="/resume.pdf" download className="resume-btn">
            <FaDownload /> Download Resume
          </a>

          <div className="fun-facts">
            <h3>Fun Facts</h3>
            <ul>
              <li>
                ⚡ Coding challenges are my favorite way to sharpen skills.
              </li>
              <li>💡 I love solving algorithmic problems.</li>
              <li>
                🚀 Built a real-time collaborative app with Next.js &
                Liveblocks.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right side tech cards */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <TechCard
            icon={<FaReact color="#61DBFB" size={100} />}
            name="React"
          />
          <TechCard
            icon={<FaNodeJs color="#3C873A" size={100} />}
            name="Node.js"
          />
          <TechCard
            icon={<SiMongodb color="#47A248" size={100} />}
            name="MongoDB"
          />
          <TechCard icon={<FaJava color="#f89820" size={100} />} name="Java" />
          <TechCard
            icon={<SiBootstrap color="#7952B3" size={100} />}
            name="Bootstrap"
          />
          <TechCard
            icon={<SiJavascript color="#F7DF1E" size={100} />}
            name="JavaScript"
          />
        </motion.div>
      </div>

      {/* Hire Me button */}
      <motion.div
        className="hire-me"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <a href="mailto:purushottamsingh1141@gmail.com">
          <button type="button" className="hire-btn">
            <FaEnvelope /> Hire Me
          </button>
        </a>
      </motion.div>
    </section>
  );
};

// Tech card animation
const TechCard = ({ icon, name }) => {
  return (
    <motion.div
      className="tech-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="tech-icon">{icon}</div>
      <p>{name}</p>
    </motion.div>
  );
};

export default About;
