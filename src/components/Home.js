import React from "react";
import "./Home.css";
import profilePic from "./pp.jpg"; // Make sure to place your image in src/assets/

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h3>
          Hello, my name is <span className="highlight">Purushottam Singh</span>
        </h3>
        <h1>
          I’m a <span className="web-designer">Web Developer</span>
          <span className="cursor">|</span>
        </h1>
        <p>
          I’m a web developer with experience in creating stylish, responsive
          front-end projects. My expertise is in React, HTML, CSS, and
          JavaScript.
        </p>
        <a className="btn" href="#about">
          More About Me
        </a>
      </div>
      <div className="home-image-wrapper">
        <img src={profilePic} alt="Profile" className="home-profile-img" />
        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>
      </div>
    </section>
  );
};

export default Home;
