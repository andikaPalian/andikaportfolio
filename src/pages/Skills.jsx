import React, { useState } from "react";
import { cn } from "../lib/utils";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const skills = [
  { name: "HTML/CSS", level: 70, category: "Frontend" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "React", level: 60, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "MongoDB", level: 60, category: "Backend" },
  { name: "PostgreSQL", level: 60, category: "Backend" },
  { name: "Git", level: 80, category: "Tools" },
  { name: "Vs Code", level: 90, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

const getCategoryIcon = (category) => {
  switch (category) {
    case "Frontend":
      return <FaCode className="text-blue-400 mr-2" />;
    case "Backend":
      return <FaServer className="text-green-400 mr-2" />;
    case "Tools":
      return <FaTools className="text-yellow-400 mr-2" />;
    default:
      return null;
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="min-h-screen py-27 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-gradient-blue">Skills</span>
        </h2>

        {/* Category button scrollable */}
        <div className="flex gap-3 overflow-x-auto flex-nowrap pb-4 mb-10 justify-start sm:justify-center scrollbar-thin scrollbar-thumb-primary/50">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "flex-shrink-0 min-w-max px-4 py-2 text-sm sm:text-base rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                  : "bg-zinc-800/50 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid 2 kolom di mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 p-4 sm:p-6 rounded-xl shadow-md transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-2">
                {getCategoryIcon(skill.category)}
                <h3 className="font-semibold text-sm sm:text-base">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-2 relative">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right -mt-1">
                <span className="text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
