import React from "react";
import ProjectCard from "./ProjectCard";
import project1Image from "@/assets/images/Project1.png";
import project2Image from "@/assets/images/Project2.png";
import project3Image from "@/assets/images/Project3.png";
import project4Image from "@/assets/images/Project4.png";
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
      name: "Youtube Clone",
      github: "https://github.com/KKWChao/YoutubeClone",
      image: project2Image,
      link: "https://632a22c204beb617c6d1078a--meek-marzipan-6344b2.netlify.app/",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
    {
      name: "Demo Medical Site",
      github: "https://github.com/KKWChao/DocSite",
      image: project3Image,
      link: "charlie.com",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
    {
      name: "Social Media Clone",
      github: "delta.git",
      image: project4Image,
      link: "delta.com",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae reprehenderit veritatis suscipit numquam eum modi quasi sunt. Doloremque cum esse quod possimus, voluptatem praesentium maxime neque dicta nesciunt sit?",
    },
  ];

  return (
    <section
      id="projects"
      className="mx-auto flex flex-col items-center justify-center bg-mono-700"
    >
      <h1 className="text-5xl font-bold text-mono-200 md:py-20">Projects</h1>
      <div className="w-5/6">
        <div className="flex flex-col justify-around gap-8 md:flex-row">
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
      </div>
    </section>
  );
};

export default Projects;
