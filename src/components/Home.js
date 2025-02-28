import React from "react";
import "./Home.css"; // Custom styling
import profilePic from "./profile.jpg"; // Path to your profile picture

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={profilePic} alt="Purushottam Singh" className="profile-pic" />
        <h2>Welcome to My Portfolio!</h2>
        <p>
          Hi, I'm Purushottam Singh, a passionate web developer specializing in
          Front-end technologies like HTML, CSS, JavaScript, and React. I'm
          constantly learning and improving my skills.
        </p>
        <div className="cta">
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
          <a href="#projects" className="cta-button">
            See My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
