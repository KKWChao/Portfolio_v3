import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const Projects = [
    {
      projectName: "alpha",
      projectGithub: "alpha.git",
      projectImage: "alpha.src",
      projectLink: "alpha.com",
      projectDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
    {
      projectName: "beta",
      projectGithub: "beta.git",
      projectImage: "beta.src",
      projectLink: "beta.com",
      projectDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
    {
      projectName: "charlie",
      projectGithub: "charlie.com",
      projectImage: "charlie.src",
      projectLink: "charlie.com",
      projectDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
    {
      projectName: "delta",
      projectGithub: "delta.git",
      projectImage: "delta.src",
      projectLink: "delta.com",
      projectDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
  ];

  return (
    <section id="projects" className="mx-auto">
      <div className="mx-auto flex flex-col justify-around gap-10 overflow-hidden p-10 md:w-2/3 md:flex-row">
        {Projects.map((items, i) => (
          <div
            key={`${items.projectName}_${i}`}
            className="flex flex-col items-center gap-4 p-4"
          >
            <h1 className="text-4xl font-bold">{items.projectName}</h1>
            {/* Change image to background */}
            <img
              src={items.projectImage}
              alt={items.projectName}
              className="h-[180px] w-[180px] bg-gray-500"
            />

            <p className="mx-2 text-xl">{items.projectDescription}</p>
            <button
              className="button w-1/2 rounded bg-yellow-400 p-2 duration-200 ease-in-out hover:bg-yellow-700 hover:text-white"
              href={items.projectGithub}
              onClick={() => {}}
            >
              {items.projectGithub}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
