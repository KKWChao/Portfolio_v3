import React from "react";

// WIP
const ProjectCard = (props, i) => {
  /* CAROUSEL */
  // const [Carousel, setCarousel] = useState(false);
  return (
    /* V1 Card */
    // <div
    //   key={`${props.projectName}_${i}`}
    //   className="flex flex-col items-center justify-center"
    // >
    //   <h1 className="pb-3 text-center text-4xl font-bold text-DarkBg">
    //     {props.projectName.toUpperCase()}
    //   </h1>
    //   <div
    //     className="relative inline-block  w-full rounded-lg border text-white hover:text-black"
    //     key={props.key}
    //   >
    //     <img
    //       src={props.projectImage}
    //       alt="Evogym"
    //       className="h-[360px] w-[360px] overflow-hidden"
    //     />
    //     <span className="absolute top-14 h-full w-full p-4 text-xl opacity-0 drop-shadow-md transition-all duration-300 ease-in-out hover:opacity-100">
    //       {props.projectDescription}
    //     </span>
    //   </div>
    //   <div className="mt-4 flex w-full gap-4">
    //     <button
    //       className="button mt-2 w-1/2 rounded bg-Highlight p-3 duration-200 ease-in-out hover:bg-LighterBg"
    //       href={props.projectLink}
    //       target="_blank"
    //       onClick={() => {}}
    //     >
    //       <a href={props.projectLink} target="_blank">
    //         Deployment
    //       </a>
    //     </button>
    //     <button
    //       className="button mt-2 w-1/2 rounded bg-Highlight p-3 duration-200 ease-in-out hover:bg-LighterBg"
    //       href={props.projectGit}
    //       target="_blank"
    //       onClick={() => {}}
    //     >
    //       <a href={props.projectLink} target="_blank">
    //         Github
    //       </a>
    //     </button>
    //   </div>
    // </div>

    /* V2 Card */
    <div
      key={`${props.projectName}_${i}`}
      className="flex h-full w-full flex-col items-center justify-center bg-LighterBg shadow-lg"
    >
      <div
        className="relative inline-block w-full border text-white hover:text-black"
        key={props.key}
      >
        <img
          src={props.projectImage}
          alt="Evogym"
          className="overflow-hidden"
        />
      </div>
      <div className="mt-4 w-full gap-4 p-4">
        <h1 className="pb-3 text-4xl font-bold text-DarkBg">
          {props.projectName.toUpperCase()}
        </h1>
        <span className="top-14 h-full w-full text-xl">
          {props.projectDescription}
        </span>
        <div className="m-4 flex justify-around font-semibold">
          <button
            className="button w-1/3 rounded border border-black border-opacity-20 bg-Highlight py-3 shadow-lg duration-200 ease-in-out hover:bg-LighterBg"
            href={props.projectLink}
            target="_blank"
            onClick={() => {}}
          >
            <a href={props.projectLink} target="_blank">
              Deployment
            </a>
          </button>
          <button
            className="button w-1/3 rounded border border-black border-opacity-20 bg-Highlight py-3 shadow-lg duration-200 ease-in-out hover:bg-LighterBg"
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
    </div>
  );
};

export default ProjectCard;
