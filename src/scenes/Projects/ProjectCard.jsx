import React from "react";

// WIP
const ProjectCard = (props, i) => {
  const buttonStyle =
    "button w-2/3 py-3 rounded border-2 border-primary-300 border-opacity-20 bg-primary-100 shadow-lg duration-200 ease-in-out hover:bg-primary-200 hover:shadow-2xl active:bg-secondary-300 mt-2 text-mono-700 font-semibold";
  /* CAROUSEL */
  // const [Carousel, setCarousel] = useState(false);
  return (
    /* V2 Card */
    <div
      key={`${props.projectName}_${i}`}
      className="flex h-full flex-col rounded-xl border border-mono-800 bg-mono-200 shadow-lg duration-300 ease-in-out hover:shadow-2xl"
    >
      <div
        className="relative inline-block w-full text-mono-200 hover:text-mono-800"
        key={props.key}
      >
        <img
          src={props.projectImage}
          alt={props.projectName}
          className="max-h-[360px] w-full rounded-t-lg"
        />
      </div>
      <div className="flex flex-col items-center gap-4 py-10 px-5">
        <a
          className=" text-xl font-bold text-mono-800 md:text-2xl"
          href={props.projectLink}
          target="_blank"
        >
          {props.projectName.toUpperCase()}
        </a>

        <p className="w-full text-sm md:text-xl">{props.projectDescription}</p>
        <button
          className={`${buttonStyle}`}
          href={props.projectGit}
          target="_blank"
          onClick={() => {}}
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
