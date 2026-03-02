import React, { useState } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML/CSS", level: 70, category: "Frontend", icon: SiHtml5, color: "text-[#E34F26]" },
  {
    name: "JavaScript",
    level: 80,
    category: "Frontend",
    icon: SiJavascript,
    color: "text-[#F7DF1E]",
  },
  { name: "React", level: 60, category: "Frontend", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Node.js", level: 70, category: "Backend", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express", level: 80, category: "Backend", icon: SiExpress, color: "text-black" },
  { name: "MongoDB", level: 60, category: "Backend", icon: SiMongodb, color: "text-[#47A248]" },
  {
    name: "PostgreSQL",
    level: 60,
    category: "Backend",
    icon: SiPostgresql,
    color: "text-[#4169E1]",
  },
  { name: "Git", level: 80, category: "Tools", icon: SiGit, color: "text-[#F05032]" },
  {
    name: "Vs Code",
    level: 90,
    category: "Tools",
    icon: VscVscode,
    color: "text-[#007ACC]",
  },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory,
  );

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-8 bg-[#f4f4f5] min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            My{" "}
            <span className="text-[#3b82f6] underline decoration-4 underline-offset-8">Skills</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 border-2 border-black font-bold uppercase tracking-wider text-sm transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[#3b82f6] text-white shadow-none translate-x-[4px] translate-y-[4px]"
                  : "bg-white text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start content-start min-h-[400px]">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="h-fit bg-white border-[3px] border-black p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col justify-between transform transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <Icon className={`text-2xl ${skill.color}`} />
                    <h3 className="font-black text-lg md:text-xl tracking-wide">{skill.name}</h3>
                  </div>
                  <span className="font-bold text-gray-600">{skill.level}%</span>
                </div>

                <div className="w-full h-4 bg-gray-200 border-2 border-black flex overflow-hidden">
                  <div
                    className="h-full bg-[#3b82f6] border-r-2 border-black transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
