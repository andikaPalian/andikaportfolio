import React from "react";
import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";

const ProjectCards = ({ img, title, tags, link, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800/50 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" +
        classes
      }
    >
      <figure className="overflow-hidden aspect-square rounded-lg mb-4">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-[22px] font-normal mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <FiExternalLink className="w-5 h-5" aria-hidden="true" />
        </div>
      </div>

      <a href={link} target="_blank" className="absolute inset-0"></a>
    </div>
  );
};

ProjectCards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCards;
