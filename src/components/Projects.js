import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import foodie from "./image/foodie.png";
import movie from "./image/moviezone.png";
import codebox from "./image/codebox.png";
import food from "./image/food.png";
import cityRoad from "./image/cityRoad.png";

const projects = [
  {
    title: "Foodie",
    link: "https://foodie-singh.netlify.app",
    image: foodie,
  },
  {
    title: "Codebox",
    link: "https://code-box-nine.vercel.app/",
    image: codebox,
  },
  {
    title: "CityRoad",
    link: "https://city-road.vercel.app",
    image: cityRoad,
  },
  {
    title: "MovieZone",
    link: "https://moviezone-three.vercel.app/",
    image: movie,
  },
  {
    title: "Food Recipe",
    link: "https://food-recipe-tau-lemon.vercel.app/",
    image: food,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      {/* Section Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
