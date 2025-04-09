import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../data/projectsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
        <Slider {...settings}>
          {projectsData.map((data) => (
            <div className="px-4 py-10">
              <div
                key={data.id}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2 text-center pb-2">
                  {data.title}
                </h3>
                <div className="flex justify-center pb-[100px]">
                  <a href={data.github} target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-blue-500 text-2xl"
                    />
                  </a>
                </div>
                <p className="text-gray-400 mb-4 text-center">
                  {data.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {data.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Project;
