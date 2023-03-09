import React from "react";
import { motion } from "framer-motion";
import Box3js from "../../components/Box3js";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex h-2/3 items-center justify-center bg-LightBg"
    >
      <div className="items-center gap-8">
        <div className="mx-auto flex justify-center gap-x-32 md:flex-row">
          <motion.div
            className="flex flex-col gap-4 p-8 py-10 text-DarkBg md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-xl">
              I have completed a coding bootcamp where I gained
              hands-onexperience building web applications using various
              technologies such as HTML, CSS, JavaScript, and React. Prior to
              that, I earned a degree in statistics, which has given me a solid
              foundation in data analysis and problem-solving. I consider myself
              a fast and driven learner, always eager to acquire new skills and
              knowledge to improve my work. I am excited to bring my passion for
              technology and analytics to any project or team I work with.
            </p>
          </motion.div>

          {/* <div className="h-100% rounded-md md:w-1/3">
            <Box3js />
          </div> */}
        </div>
        <div className="h-fit md:w-full">
          <Box3js />
        </div>
      </div>
    </section>
  );
};

export default About;
