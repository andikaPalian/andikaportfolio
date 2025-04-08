import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Particles from "../components/background/Particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  //   const {text} = useTypewriter({
  //     words: ["Andika", "Backend Developer"],
  //     loop: true,
  //     typeSpeed: 120,
  //     deleteSpeed: 70
  // });
  return (
    <div style={{ width: "100%", height: "600px", position: "relative", minHeight: "100vh" }}>
      <div className="absolute inset-0 z-0">
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
      </div>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-right text-white">
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
            {/* <span><Cursor cursorStyle='|' /></span> */}
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a passionate backend developer from Indonesia
          </p>

          {/* <div className='flex justify-center space-x-4'>
                    <a href="" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'>View Projects</a>
                </div> */}
          <div className="flex items-center justify-center space-x-4">
            <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md">
              <a href="">View Projects</a>
            </button>

            <button className="rounded-md border-2 border-dashed border-white bg-black px-6 py-[9px] font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              <a href="">Contack Me</a>
            </button>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <h1 className="text-gray-400 text-lg">Follow me here</h1>
          </div>
            <div className="flex justify-center py-4 space-x-2">
              <a href="https://www.instagram.com/andika121204/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
              </a>
              <a href="https://github.com/andikaPalian" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/andika-palian-4b96b0309/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
              </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
