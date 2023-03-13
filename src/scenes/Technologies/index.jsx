import React from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedText from "../../components/AnimatedText";
import { OrbitControls } from "@react-three/drei";
import { Html, PerspectiveCamera } from "@react-three/drei";

import { FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiExpress,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

import Box3js from "@/components/Box3js";

const iconStyle =
  "icon fill-DarkBg duration-300 ease-in-out hover:scale-150 hover:fill-Highlight";

const iconSize = "5em";

const skillsList = [
  {
    skill: "HTML",
    icon: <FaHtml5 size={iconSize} className={iconStyle} />,
  },
  {
    skill: "CSS",
    icon: <FaCss3Alt size={iconSize} className={iconStyle} />,
  },
  {
    skill: "JavaScript",
    icon: <SiJavascript size={iconSize} className={iconStyle} />,
  },
  {
    skill: "React",
    icon: <RiReactjsFill size={iconSize} className={iconStyle} />,
  },
  {
    skill: "BootStrap",
    icon: <FaBootstrap size={iconSize} className={iconStyle} />,
  },
  {
    skill: "TailwindCss",
    icon: <SiTailwindcss size={iconSize} className={iconStyle} />,
  },
  {
    skill: "Express",
    icon: <SiExpress size={iconSize} className={iconStyle} />,
  },
  {
    skill: "Node.js",
    icon: <FaNodeJs size={iconSize} className={iconStyle} />,
  },
  {
    skill: "MongoDB",
    icon: <SiMongodb size={iconSize} className={iconStyle} />,
  },
  {
    skill: "MySQL",
    icon: <DiMysql size={iconSize} className={iconStyle} />,
  },
  {
    skill: "GraphQL",
    icon: <SiGraphql size={iconSize} className={iconStyle} />,
  },
  {
    skill: "jQuery",
    icon: <SiJquery size={iconSize} className={iconStyle} />,
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="relative mx-auto h-screen">
      <h1 className="py-10 text-center text-5xl font-bold">Technologies</h1>
      <div className="absolute h-full w-full">
        <Canvas camera={{ position: [4, 4, 4] }}>
          {/* <PerspectiveCamera
            makeDefault
            fov={20}
            position={[0, 0, 20]}
            rotation={[0, 0, 0]} // gotta fix rotations?
          /> */}
          <ambientLight intensity={1} />
          <directionalLight position={[0, 10, 5]} />
          <Box3js />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default Technologies;
