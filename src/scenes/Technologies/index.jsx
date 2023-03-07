import React from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedText from "../../components/AnimatedText";
import { OrbitControls } from "@react-three/drei";

const skillsList = [
  {
    skill: "HTML/CSS",
    icon: "",
  },
  {
    skill: "React",
    icon: "",
  },
  {
    skill: "BootStrap",
    icon: "",
  },
  {
    skill: "TailwindCss",
    icon: "",
  },
  {
    skill: "Express",
    icon: "",
  },
  {
    skill: "Node.js",
    icon: "",
  },
  {
    skill: "MongoDB",
    icon: "",
  },
  {
    skill: "MySQL",
    icon: "",
  },
  {
    skill: "GraphQL",
    icon: "",
  },
  {
    skill: "jQuery",
    icon: "",
  },
  {
    skill: "Python",
    icon: "",
  },
  {
    skill: "Git",
    icon: "",
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="mx-auto h-1/2 w-full bg-LighterBg">
      <div className=" flex h-full w-full flex-col justify-center">
        <h1 className="p-4 text-center text-3xl font-bold">Technology</h1>
        {/* WILL ADD THREE FIBER ANIMATIONS */}
        <div className="text-center">
          <ul className="grid grid-flow-col grid-rows-4 gap-4">
            {skillsList.map((items) => (
              <li className="text-black">{items.skill}</li>
            ))}
          </ul>
        </div>
        <div className="">
          <Canvas>
            <AnimatedText />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
