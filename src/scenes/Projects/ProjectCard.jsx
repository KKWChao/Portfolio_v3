import React from "react";
import dummy from "@/assets/react.svg";

// WIP
const ProjectCard = (props, i) => {
  /* CAROUSEL */
  // const [Carousel, setCarousel] = useState(false);
  return (
    <div
      key={`${props.projectName}_${i}`}
      className="flex flex-col items-center justify-center"
    >
      <h1 className="pb-3 text-center text-4xl font-bold text-DarkBg">
        {props.projectName.toUpperCase()}
      </h1>
      <div
        className="relative inline-block h-[360px] w-full border border-yellow-500 text-white hover:text-black md:w-[360px]"
        key={props.key}
        style={{
          background: `${dummy}`,
        }}
      >
        {/* IMAGE SIZE [320 x 320] */}
        <span className="absolute top-14 h-full w-full p-4 text-xl opacity-0 transition-all duration-300 ease-in-out hover:opacity-100">
          {props.projectDescription}
        </span>
      </div>
      <div className="mt-4 flex w-full gap-4">
        <button
          className="button mt-2 w-1/2 rounded bg-Highlight p-3 duration-200 ease-in-out hover:bg-LighterBg"
          href={props.projectLink}
          target="_blank"
          onClick={() => {}}
        >
          <a href={props.projectLink} target="_blank">
            Deployment
          </a>
        </button>
        <button
          className="button mt-2 w-1/2 rounded bg-Highlight p-3 duration-200 ease-in-out hover:bg-LighterBg"
          href={props.projectGit}
          target="_blank"
          onClick={() => {}}
        >
          <a href={props.projectLink} target="_blank">
            Github
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
