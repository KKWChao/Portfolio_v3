import React from "react";
import { motion } from "framer-motion";
import Box3js from "../../components/Box3js";

// front end color
const spanStyleTools = "text-secondary-100";

// back end color
const spanStyleBackend = "text-tertiaryGreen-100";

// tool color
const spanStyleFrontend = "text-tertiaryOrange-100";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex h-2/3 items-center justify-center bg-mono-700"
    >
      <div className="items-center gap-8">
        <div className="mx-auto flex justify-center gap-x-32 md:flex-row">
          <motion.div
            className="flex flex-col gap-4 p-8 py-10 text-mono-200 md:w-2/3 lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="text-2xl">
              Hi, I'm <span className="text-primary-100">Kelvin Chao</span>, a
              web developer with a couple years of experience building websites
              and projects. I specialize in{" "}
              <span className={spanStyleFrontend}>Javascript</span>,{" "}
              <span className={spanStyleFrontend}>HTML/CSS</span>, and{" "}
              <span className={spanStyleFrontend}>Bootstrap</span>, and I'm
              passionate about creating intuitive user experiences that delight
              visitors and drive business results. My expertise in Javascript
              allows me to craft elegant and scalable front-end solutions using
              modern frameworks like{" "}
              <span className={spanStyleFrontend}>React</span> and{" "}
              <span className={spanStyleFrontend}>Vue.js</span>.
              <br />
              <br />I have experience integrating these frameworks with back-end
              technologies like{" "}
              <span className={spanStyleBackend}>Express.js</span> and{" "}
              <span className={spanStyleBackend}>MongoDB</span>, and I'm
              well-versed in creating RESTful APIs that power complex web
              applications. In addition to front-end development, I also have a
              strong background in{" "}
              <span className="">Statistics and Data Analysis</span>, including
              experience with <span className={spanStyleBackend}>Python</span>,{" "}
              <span className={spanStyleBackend}>R</span>, and{" "}
              <span className={spanStyleBackend}>Django</span>. I'm comfortable
              working with databases like{" "}
              <span className={spanStyleTools}>MySQL</span>,{" "}
              <span className={spanStyleTools}>PostGreSQL</span>,{" "}
              <span className={spanStyleTools}>MongoDB</span>.
              <br />
              <br />
              Finally, I'm committed to staying up-to-date with emerging web
              technologies and best practices. If you're looking for a talented
              and dedicated web developer to help bring your vision to life,
              please don't hesitate to get in touch. I'd love to hear about your
              project and discuss how I can help make it a success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
