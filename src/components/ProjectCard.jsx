import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, tags, title, projectLink, classes, badge }) => {
  return (
    <div
      className={`relative rounded-2xl p-4 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 
        ring-inset ring-zinc-50/5 transition-colors ${classes}`}
    >
      {badge && (
        <div className="absolute bg-zinc-900 m-2 px-3 py-1 rounded flex items-center gap-1.5 text-sm tracking-wide">
          {badge === "Upcoming" && (
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute rounded-full bg-emerald-400 inset-0 animate-ping"></span>
            </span>
          )}
          {badge}
        </div>
      )}

      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex justify-between items-center gap-4">
        <div className="">
          <h3 className="title-1 mb-3">{title}</h3>
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
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      ></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};
export default ProjectCard;
