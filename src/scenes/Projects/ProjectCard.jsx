import React from "react";
import { GoLinkExternal } from "react-icons/go";
// WIP
const ProjectCard = (props, i) => {
  const buttonStyle =
    "button w-2/3 py-3 rounded border-2 border-primary-300 border-opacity-20 bg-primary-100 shadow-lg duration-200 ease-in-out hover:bg-primary-200 hover:shadow-2xl active:bg-secondary-300 mt-2 text-mono-200 font-semibold font-bold md:text-2xl";
  /* CAROUSEL */
  // const [Carousel, setCarousel] = useState(false);
  return (
    /* V2 Card */
    <div
      key={`${props.projectName}_${i}`}
      className="project_card flex h-full flex-col rounded-xl border-4 border-mono-700 bg-mono-400 text-mono-200 shadow-lg duration-300 ease-in-out hover:border-secondary-300"
    >
      <div className="relative inline-block w-full" key={props.key}>
        <img
          src={props.projectImage}
          alt={props.projectName}
          className="max-h-[360px] w-full rounded-t-lg"
        />
      </div>
      <div className="flex flex-col items-center gap-4 py-10 px-5">
        <a
          className=" flex items-center gap-2 text-xl font-bold md:text-2xl"
          href={props.projectLink}
          target="_blank"
        >
          {props.projectName.toUpperCase()}
          <span>
            <GoLinkExternal />
          </span>
        </a>

        <p className="w-full text-sm md:text-xl">{props.projectDescription}</p>
        <button className={`${buttonStyle}`}>
          <a href={props.projectGit} target="_blank">
            Github
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
