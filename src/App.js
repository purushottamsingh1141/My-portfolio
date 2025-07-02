import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Home />
        <About />
        <Projects />
        <section id="skills">
          <SkillsSection />
        </section>
        <Contact />
      </main>
    </div>
  );
}

export default App;
