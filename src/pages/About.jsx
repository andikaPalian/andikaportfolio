import React from "react";
// import { Skills } from "../data/skillsData";

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-zinc-800/50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-md">
          
          {/* Paragraf Deskripsi */}
          <p className="text-zinc-300 text-justify text-[15px] sm:text-base md:text-lg leading-relaxed md:leading-8 tracking-wide mb-8">
            Hi! I'm <strong>Andika Palian</strong>, a backend developer who loves turning ideas into scalable and secure web applications. With a strong foundation in Node.js, Express.js, MongoDB, and PostgreSQL, I specialize in building clean APIs, real-time features with Socket.IO, and robust authentication systems. Over the years, I've worked on various backend projects ranging from e-commerce systems to social media APIs and real-time chat apps. I'm passionate about writing maintainable code, designing efficient database structures, and solving backend challenges that power great user experiences.
          </p>

          {/* Statistik */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {aboutItems.map((item, key) => (
              <div key={key}>
                <div className="flex items-center mb-1">
                  <span className="text-xl sm:text-2xl md:text-4xl font-bold">
                    {item.number}
                  </span>
                  <span className="text-sky-400 font-semibold text-xl sm:text-2xl md:text-3xl ml-1">
                    +
                  </span>
                </div>
                <p className="text-sm sm:text-base text-zinc-400">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;