import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="mx-auto flex w-full flex-col justify-center gap-x-32 md:flex-row md:py-20 md:px-32">
        <div className="flex flex-col p-8 md:w-1/4" style={{}}>
          <h1 className="text-3xl">About Me</h1>
          <p>
            I have completed a coding bootcamp where I gained hands-onexperience
            building web applications using various technologies such as HTML,
            CSS, JavaScript, and React. Prior to that, I earned a degree in
            statistics, which has given me a solid foundation in data analysis
            and problem-solving. I consider myself a fast and driven learner,
            always eager to acquire new skills and knowledge to improve my work.
            I am excited to bring my passion for technology and analytics to any
            project or team I work with.
          </p>
        </div>
        <div className="bg-gray-500 md:w-1/4">DUMMY IMAGE</div>
      </div>
    </section>
  );
};

export default About;
