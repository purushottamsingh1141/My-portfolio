import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skill.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJava } from "react-icons/di";

const skills = [
  { name: "Java", level: 80, color: "#f97316" },
  { name: "React", level: 70, color: "#3b82f6" },
  { name: "HTML", level: 90, color: "#ec4899" },
];

const icons = [
  { icon: <FaReact size={100} color="#61DAFB" />, label: "React" },
  { icon: <FaNodeJs size={100} color="#8cc84b" />, label: "Node.js" },
  { icon: <DiJava size={100} color="#f89820" />, label: "Java" },
];

const categories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
    border: "#f97316",
  },
  { title: "Backend", skills: ["Node.js", "MongoDB"], border: "#3b82f6" },
  { title: "Tools", skills: ["Git"], border: "#10b981" },
];

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-title">SKILLS</h2>

      {/* Top 60% */}
      <div className="skills-top">
        <div className="skills-left">
          {skills.map((skill, index) => (
            <div key={index} className="skill-line" data-aos="fade-right">
              <span className="skill-name">{skill.name}</span>
              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                ></div>
                <span className="bar-percent">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-right" data-aos="fade-left">
          {icons.map((item, i) => (
            <div key={i} className="icon-pill">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom 40% */}
      <div className="skills-bottom" data-aos="fade-up">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="skill-card"
            style={{ border: `2px solid ${cat.border}` }}
          >
            <h4>{cat.title}</h4>
            <ul>
              {cat.skills.map((s, j) => (
                <li key={j}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
