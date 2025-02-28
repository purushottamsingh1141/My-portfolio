import React from "react";
import "./About.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Purushottam Singh, a passionate web developer with a focus on
          creating intuitive and responsive front-end web experiences. I
          specialize in HTML, CSS, JavaScript, React, and I'm always looking to
          grow and learn more.
        </p>

        <div className="skills">
          {/* Technical Skills Section */}
          <div className="skills-list">
            <h3>Technical Skills</h3>
            <div className="progress-bars">
              <div className="progress">
                <label>HTML</label>
                <div className="progress-bar-container">
                  <progress value="85" max="100"></progress>
                  <span>85%</span>
                </div>
              </div>
              <div className="progress">
                <label>CSS</label>
                <div className="progress-bar-container">
                  <progress value="75" max="100"></progress>
                  <span>75%</span>
                </div>
              </div>
              <div className="progress">
                <label>JavaScript</label>
                <div className="progress-bar-container">
                  <progress value="55" max="100"></progress>
                  <span>55%</span>
                </div>
              </div>
              <div className="progress">
                <label>Java</label>
                <div className="progress-bar-container">
                  <progress value="70" max="100"></progress>
                  <span>70%</span>
                </div>
              </div>
              <div className="progress">
                <label>React</label>
                <div className="progress-bar-container">
                  <progress value="65" max="100"></progress>
                  <span>65%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Skills Section */}
          <div className="professional-skills">
            <h3>Professional Skills</h3>
            <div className="circle-skills1">
              <div className="circle-skill">
                <label>Problem Solving</label>
                <CircularProgressbar value={60} text="60%" />
              </div>
              <div className="circle-skill">
                <label>Creativity</label>
                <CircularProgressbar value={70} text="70%" />
              </div>
            </div>
            <div className="circle-skills1">
              <div className="circle-skill">
                <label>Communication</label>
                <CircularProgressbar value={80} text="80%" />
              </div>
              <div className="circle-skill">
                <label>Teamwork</label>
                <CircularProgressbar value={90} text="90%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
