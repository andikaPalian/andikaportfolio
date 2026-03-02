import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-center">
          About <span className="text-[#3b82f6]">Me</span>
        </h2>
        <div className="flex mt-2">
          <div className="w-16 h-1.5 bg-[#a3e635]"></div>
          <div className="w-16 h-1.5 bg-[#3b82f6]"></div>
        </div>
      </div>

      <div className="relative bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="absolute -top-6 -right-2 md:-right-6 bg-[#f97316] text-white font-black text-sm md:text-base px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-3 uppercase tracking-wider">
          Backend Dev
        </div>

        <div className="flex-1 text-base md:text-lg font-medium leading-relaxed text-gray-800 space-y-6">
          <p>
            Hi! I'm{" "}
            <span className="bg-[#a3e635] px-2 py-0.5 border border-black font-bold text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Andika Palian
            </span>
            , a backend developer who loves turning ideas into scalable and secure web applications.
            With a strong foundation in{" "}
            <strong>Node.js, Express.js, MongoDB, and PostgreSQL</strong>, I specialize in building
            clean APIs, real-time features with Socket.IO, and robust authentication systems.
          </p>
          <p>
            Over the years, I've worked on various backend projects ranging from e-commerce systems
            to social media APIs and real-time chat apps. I'm passionate about writing maintainable
            code, designing efficient database structures, and solving backend challenges that power
            great user experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-6 w-full lg:w-64 shrink-0">
          <div className="bg-[#3b82f6] text-white border-[3px] border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-6 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-5xl md:text-6xl font-black mb-2">10+</span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
              Projects Done
            </span>
          </div>

          <div className="bg-[#a3e635] text-black border-[3px] border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-6 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-5xl md:text-6xl font-black mb-2">1+</span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
              Years Exp.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
