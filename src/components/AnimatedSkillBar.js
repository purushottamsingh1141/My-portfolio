import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./skill.css";

const AnimatedSkillBar = ({ name, level, color }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const styles = useSpring({
    width: inView ? `${level}%` : "0%",
    config: { tension: 120, friction: 20 },
  });

  return (
    <div className="skill-bar" ref={ref}>
      <div className="label-row">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="bar-container">
        <animated.div
          className="bar-fill"
          style={{ ...styles, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default AnimatedSkillBar;
