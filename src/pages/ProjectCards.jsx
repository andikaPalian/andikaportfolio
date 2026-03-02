import React from "react";
import { Github } from "lucide-react";

const getTagColor = (tag) => {
  if (!tag) return "bg-gray-200 text-black";
  const tagLower = tag.toLowerCase();
  if (tagLower.includes("javascript")) return "bg-[#facc15] text-black";
  if (tagLower.includes("express") || tagLower.includes("node")) return "bg-[#a3e635] text-black";
  if (tagLower.includes("mongo")) return "bg-[#4ade80] text-black";
  if (tagLower.includes("socket")) return "bg-[#c084fc] text-black";
  return "bg-gray-200 text-black";
};

const ProjectCards = ({ title, description, tech, github, img }) => {
  const safeTech = Array.isArray(tech) ? tech : [];

  return (
    <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col h-full transform transition-transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] duration-200">
      <div className="w-full h-48 sm:h-56 border-b-[3px] border-black overflow-hidden bg-zinc-900 shrink-0 flex items-center justify-center relative">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="text-[#a3e635] font-mono opacity-80 text-6xl font-black px-4 text-center">
            {"{ }"}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight leading-none">
            {title || "Project Title"}
          </h3>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3b82f6] text-white p-2 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[3px] active:translate-x-[3px] transition-all shrink-0"
            >
              <Github size={20} strokeWidth={3} />
            </a>
          )}
        </div>

        <p className="text-gray-700 font-medium text-sm md:text-base mb-6 flex-grow leading-relaxed">
          {description || "No description provided."}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-gray-100">
          {safeTech.map((item, index) => (
            <span
              key={index}
              className={`px-2 py-1 border-[2px] border-black text-xs font-bold uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)] tracking-wider ${getTagColor(item)}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
