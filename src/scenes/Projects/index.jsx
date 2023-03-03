import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const Projects = [
    {
      name: "alpha",
      github: "https://www.google.com",
      image: "alpha.src",
      link: "https://www.google.com",
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
    <section id="projects" className="mx-auto flex items-center md:h-screen">
      <div className="flex w-full flex-col justify-around gap-5 overflow-hidden p-10 md:flex-row">
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
          >
            <ProjectCard
              projectName={items.name}
              projectDescription={items.description}
              projectImage={items.image}
              projectLink={items.link}
              projectGit={items.github}
              dummyKey={i}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
