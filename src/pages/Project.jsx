import React from "react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import ProjectCards from "./ProjectCards";

const projects = [
  {
    img: project1,
    title: "UMKM DASHBOARD",
    tags: ["PHP", "MySQL"],
    link: "https://github.com/andikaPalian/project_uas_web",
  },
  {
    img: project2,
    title: "Social Media API",
    tags: ["Express.js", "MongoDB", "API"],
    link: "https://github.com/andikaPalian/social-media-api",
  },
  {
    img: project3,
    title: "Movie Reservation API",
    tags: ["Express.js", "PostgreSQL", "API"],
    link: "https://github.com/andikaPalian/movie-reservation",
  },
  {
    img: project4,
    title: "Expense Tracker API",
    tags: ["Express.js", "MongoDB", "API"],
    link: "https://github.com/andikaPalian/expense-tracker",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center">
          <span className="text-gray-300">My</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Project
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map(({ img, title, tags, link }, index) => (
            <ProjectCards
              key={index}
              img={img}
              title={title}
              tags={tags}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
