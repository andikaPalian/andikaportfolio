import React from "react";
import ProjectCards from "./ProjectCards";
import { projectsData } from "../data/projectsData";

const Project = () => {
  return (
    <section id="project" className="min-h-screen py-24 px-6 md:px-8 bg-[#EAE0D5]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="inline-block bg-white border-[3px] border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] px-8 py-3 mb-16 transform -rotate-1">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-center">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full items-stretch">
          {projectsData.map((project) => (
            <ProjectCards
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              img={project.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
