import React from "react";
import ButtonStyled from "../../components/ButtonStyled";

// WIP
const ProjectCard = (props, i) => {
  const buttonStyle =
    "button w-1/4 rounded border-2 border-MediumBg border-opacity-20 bg-LightBg py-3 shadow-lg duration-200 ease-in-out hover:bg-MediumBg hover:shadow-2xl active:bg-Highlight";
  /* CAROUSEL */
  // const [Carousel, setCarousel] = useState(false);
  return (
    /* V2 Card */
    <div
      key={`${props.projectName}_${i}`}
      className="flex h-full flex-col rounded-lg border bg-LighterBg shadow-lg duration-300 ease-in-out hover:shadow-2xl"
    >
      <div
        className="relative inline-block  w-full border text-white hover:text-black"
        key={props.key}
      >
        <img
          src={props.projectImage}
          alt={props.projectName}
          className="max-h-[360px] w-full"
        />
      </div>
      <div className="gap-4 p-4">
        <h1 className=" text-xl font-bold text-DarkBg md:text-2xl">
          {props.projectName.toUpperCase()}
        </h1>
        <p className="top-14 h-full w-full text-sm md:text-xl">
          {props.projectDescription}
        </p>
        <div className="m-4 flex justify-around font-semibold text-DarkBg">
          <button
            className={`${buttonStyle}`}
            href={props.projectLink}
            target="_blank"
            onClick={() => {}}
          >
            <a href={props.projectLink} target="_blank">
              Link
            </a>
          </button>
          <button
            className={`${buttonStyle}`}
            href={props.projectGit}
            target="_blank"
            onClick={() => {}}
          >
            <a href={props.projectGit} target="_blank">
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
