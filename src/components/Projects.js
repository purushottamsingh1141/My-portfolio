import React from "react";
import "./Projects.css";
import cityRoadImage from "./city-road.jpg";
import nineties from "./Nineties.jpg";
import todolist from "./Todolist.jpg";

const projects = [
  {
    title: "City Road",
    description:
      "A web application to explore city roads, featuring interactive maps and real-time data.",
    technologies: "HTML, CSS, JavaScript, React",
    link: "https://city-road.vercel.app/", // Replace with your actual project link
    image: cityRoadImage, // Replace with an actual image URL of your project
  },
  {
    title: "Nineties Art",
    description:
      "An animation showcase of 90s-themed art using HTML, CSS, and GSAP.",
    technologies: "HTML, CSS, GSAP",
    link: "https://nineties-art.vercel.app/", // Replace with your actual project link
    image: nineties, // Replace with an actual image URL of your project
  },
  {
    title: "To-Do List",
    description:
      "A simple and interactive web application to manage tasks, with features to add, edit, etc..",
    technologies: "HTML, CSS, JS, React",
    link: "https://todo-react-tau-pied.vercel.app/", // Replace with your actual project link
    image: todolist, // Replace with an actual image URL of your project
  },
  // Add more projects here
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
