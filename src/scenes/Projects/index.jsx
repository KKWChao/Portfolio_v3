import React from "react";
import ProjectCard from "./ProjectCard";
import project1Image from "@/assets/images/Project1.png";
import { motion } from "framer-motion";

const Projects = () => {
  const Projects = [
    {
      name: "EvoGym",
      github: "https://github.com/KKWChao/DemoSite",
      image: project1Image,
      link: "https://evogym-demo.pages.dev/",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
    {
      name: "bravo",
      github: "bravo.git",
      image: "bravo.src",
      link: "bravo.com",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
    {
      name: "charlie",
      github: "charlie.git",
      image: "charlie.src",
      link: "charlie.com",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
    {
      name: "delta",
      github: "delta.git",
      image: "delta.src",
      link: "delta.com",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
  ];

  return (
    <section
      id="projects"
      className="mx-auto flex items-center justify-center md:h-screen"
    >
      <div className="mx-10 flex w-full flex-col items-center justify-around gap-10 pt-10 md:flex-row">
        {Projects.map((items, i) => (
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 * (1 + i) }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            key={`${items}_${i}`}
          >
            <ProjectCard
              projectName={items.name}
              projectDescription={items.description}
              projectImage={items.image}
              projectLink={items.link}
              projectGit={items.github}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
