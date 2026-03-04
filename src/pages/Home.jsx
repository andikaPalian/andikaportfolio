import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#FEF9E6] text-black font-sans overflow-hidden pt-20">
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12"
      >
        <div className="flex-1 space-y-6 z-10 w-full">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            BACKEND DEVELOPER
            <div className="flex flex-col w-4 h-3 border border-black">
              <div className="bg-red-500 h-1/2 w-full"></div>
              <div className="bg-white h-1/2 w-full"></div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-[5.5rem] font-black leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="text-[#3b82f6]">Andika Palian</span>
          </h1>

          <p className="text-lg md:text-xl max-w-md border-l-4 border-black pl-4 font-medium text-gray-800 leading-relaxed">
            I'm a passionate backend developer from Indonesia building robust systems and scalable
            APIs.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#project">
              <button className="bg-[#3b82f6] text-white font-bold border-2 border-black px-6 py-3 flex items-center gap-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-wide">
                VIEW PROJECTS <span className="text-xl leading-none">↓</span>
              </button>
            </a>
            <a href="#contact">
              <button className="bg-[#facc15] text-black font-bold border-2 border-black px-6 py-3 flex items-center gap-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-wide">
                CONTACT ME <span className="text-xl leading-none bg-[#facc15]">✉</span>
              </button>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <span className="font-bold text-xs tracking-widest uppercase">FOLLOW ME:</span>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/andika121204/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-black w-10 h-10 flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-black text-xl" />
              </a>
              <a
                href="https://github.com/andikaPalian"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-black w-10 h-10 flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                <FontAwesomeIcon icon={faGithub} className="text-black text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/andika-palian-4b96b0309/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-black w-10 h-10 flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-black text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg mt-10 lg:mt-0 relative z-0">
          <div className="absolute top-4 -right-4 md:top-6 md:-right-6 w-full h-full bg-[#facc15] border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"></div>

          <div className="relative bg-white border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col z-10">
            <div className="border-b-2 border-black px-4 py-3 flex items-center gap-2 bg-white">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ef4444] border-2 border-black"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#facc15] border-2 border-black"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#22c55e] border-2 border-black"></div>
              <span className="ml-4 text-xs font-bold text-gray-400 font-mono tracking-widest">
                server.js
              </span>
            </div>

            <div className="p-6 md:p-8 font-mono text-sm md:text-[15px] overflow-x-auto whitespace-pre leading-loose">
              <span className="text-[#8b5cf6] font-bold">const</span> express = require(
              <span className="text-[#22c55e]">'express'</span>);
              <br />
              <span className="text-[#8b5cf6] font-bold">const</span> app = express();
              <br />
              app.get(<span className="text-[#22c55e]">'/'</span>, (req, res) ={">"} {"{"}
              <br />
              {"  "}res.json({"{"}
              <br />
              {"    "}status: <span className="text-[#3b82f6] font-bold">200</span>,<br />
              {"    "}message: <span className="text-[#22c55e]">'Hello World! 🚀'</span>,<br />
              {"    "}developer: <span className="text-[#22c55e]">'Andika Palian'</span>,<br />
              {"    "}skills: [<span className="text-[#22c55e]">'Node'</span>,{" "}
              <span className="text-[#22c55e]">'Express'</span>,{" "}
              <span className="text-[#22c55e]">'Postgres'</span>]<br />
              {"  "});
              <br />
              {"});"}
              <br />
              app.listen(<span className="text-[#3b82f6] font-bold">3000</span>, () ={">"} {"{"}
              <br />
              {"  "}console.log(<span className="text-[#22c55e]">'Server running...'</span>);
              <br />
              {"});"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
