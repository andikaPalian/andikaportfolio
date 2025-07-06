import React from "react";
import { Skills } from "../data/skillsData";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        {/* Deskripsi */}
        <div className="p-6 md:p-8 rounded-2xl border border-white/10 hover:-translate-y-1 transition-all bg-white/5 backdrop-blur-sm">
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            Hi! I'm Andika Palian, a backend developer who loves turning ideas
            into scalable and secure web applications. With a strong foundation
            in Node.js, Express.js, MongoDB, and PostgreSQL, I specialize in
            building clean APIs, real-time features with Socket.IO, and robust
            authentication systems.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Over the years, I’ve worked on various backend projects ranging from
            e-commerce systems to social media APIs and real-time chat apps. I'm
            passionate about writing maintainable code, designing efficient
            database structures, and solving backend challenges that power great
            user experiences.
          </p>
        </div>

        {/* Grid: Skills + Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Skills */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 text-center">🛠 Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Skills.map((skill, index) => (
                <span key={index}>{skill.icon}</span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 text-center">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
              <li>
                <strong>Teknologi Informasi</strong> – Universitas Bosowa (2023 – now)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
