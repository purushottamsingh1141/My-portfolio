import React from "react";
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
    image: foodie, //
  },
  {
    title: "Codebox",
    link: "https://code-box-psi.vercel.app",
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
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies Used:</strong> {project.technologies}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
