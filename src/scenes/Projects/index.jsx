import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const Projects = [
    {
      projectName: "alpha",
      projectGithub: "https://www.google.com",
      projectImage: "alpha.src",
      projectLink: "https://www.google.com",
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
      projectGithub: "charlie.git",
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
    <section id="projects" className="mx-auto flex h-screen items-center">
      <div className="mx-auto flex w-full flex-col justify-around gap-10 p-10 md:flex-row ">
        {/* want the hover effect to display text over the image */}
        {/* <motion.div
          key=""
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 * 1 }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <h1 className="text-center text-4xl font-bold">dummy</h1>
          <motion.div className="z-0 flex h-full w-full flex-col items-center gap-4">
            <img
              src=""
              alt=""
              className="h-[360px] w-[360px] bg-gray-500 hover:blur-sm md:relative"
            />
            <span className="z-10 flex h-[360px] w-[360px] items-center p-2 text-xl text-white opacity-0 transition-all duration-300 ease-in-out hover:opacity-100 md:absolute">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              beatae reprehenderit veritatis suscipit numquam eum modi quasi
              sunt. Doloremque cum esse quod possimus, voluptatem praesentium
              maxime neque dicta nesciunt sit?"
            </span>
            <button
              className="button w-1/2 rounded bg-yellow-400 p-2 duration-200 ease-in-out hover:bg-yellow-700 hover:text-white"
              href=""
              onClick={() => {}}
            >
              Dummy
            </button>
          </motion.div>
        </motion.div> */}

        {Projects.map((items, i) => (
          <motion.div
            key={`${items.projectName}_${i}`}
            className="flex flex-col items-center gap-4 p-4 text-DarkBg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 * (i + 1) }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <h1 className="text-4xl font-bold">{items.projectName}</h1>
            {/* Change image to background */}
            <img
              src={items.projectImage}
              alt={items.projectName}
              className="h-[360px] w-[360px] bg-MediumBg"
            />

            <p className="mx-2 text-xl">{items.projectDescription}</p>
            <div className="flex w-1/3 gap-4">
              <button
                className="button rounded bg-Highlight p-2 duration-200 ease-in-out hover:bg-LighterBg"
                href={items.projectGithub}
                target="_blank"
                onClick={() => {}}
              >
                <a href={items.projectGithub} target="_blank">
                  Github
                </a>
              </button>
              <button
                className="button rounded bg-Highlight p-2 duration-200 ease-in-out hover:bg-LighterBg"
                href={items.projectLink}
                target="_blank"
                onClick={() => {}}
              >
                <a href={items.projectLink} target="_blank">
                  Deployment
                </a>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
