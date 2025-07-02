import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDownload,
  FaEnvelope,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiBootstrap, SiJavascript } from "react-icons/si";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        <div className="about-left">
          <p className="about-text">
            Hi, I'm <span className="highlight">Purushottam</span>, a full-stack
            web developer with a strong background in building scalable and
            efficient web applications. I specialize in front-end and back-end
            development using technologies like React, Node.js, MongoDB, and
            javaScript.
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
        </div>

        <div className="about-right">
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
        </div>
      </div>

      <div className="hire-me">
        <a href="mailto:purushottamsingh1141@gmail.com">
          <button type="button" className="hire-btn">
            <FaEnvelope /> Hire Me
          </button>
        </a>
      </div>
    </section>
  );
};

const TechCard = ({ icon, name }) => {
  return (
    <div className="tech-card">
      <div className="tech-icon">{icon}</div>
      <p>{name}</p>
    </div>
  );
};

export default About;
