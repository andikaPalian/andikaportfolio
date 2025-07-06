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
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="project" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-5xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        <Slider {...settings}>
          {projectsData.map((data) => (
            <div key={data.id} className="px-4">
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-center">{data.title}</h3>
                  <p className="text-gray-400 mb-4 text-center">{data.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
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
                <div className="flex justify-center mt-4">
                  <a href={data.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
