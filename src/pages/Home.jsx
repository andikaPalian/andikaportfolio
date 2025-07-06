import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Particles from "../components/background/Particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="w-full min-h-[100dvh] relative">
      {/* Background Particles */}
      {/* <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}

      {/* Main Section */}
      <section id="home" className="min-h-[100dvh] flex items-center justify-center relative">
        <div className="text-center z-10 px-4 max-w-4xl w-full">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              <Typewriter
                words={["Andika Palian", "Backend Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={70}
              />
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            I'm a passionate backend developer from Indonesia
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#project">
              <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md">
                View Projects
              </button>
            </a>
            <a href="#contact">
              <button className="rounded-md border-2 border-dashed border-white bg-black px-6 py-[9px] font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                Contact Me
              </button>
            </a>
          </div>

          {/* Social Media */}
          <div className="mt-10">
            <p className="text-gray-400 text-sm sm:text-base mb-4">Follow me here</p>
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/andika121204/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-pink-500" />
              </a>
              <a href="https://github.com/andikaPalian" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-white text-2xl hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/andika-palian-4b96b0309/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
