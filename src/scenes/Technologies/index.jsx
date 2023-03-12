import React from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedText from "../../components/AnimatedText";
import { OrbitControls } from "@react-three/drei";

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

import Box3js from "../../components/Box3js";

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
    <section
      id="technologies"
      className="mx-auto flex h-full justify-center bg-mono-700 text-mono-200"
    >
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="p-4 text-center text-3xl font-bold">Technologies</h1>
        {/* MOBILE WILL HAVE SIMPLE AND DESKTOP WILL HAVE 3D */}

        {/* WILL ADD THREE FIBER ANIMATIONS */}
        <div className="w-full text-center">
          <div className="flex w-full flex-col justify-around bg-tertiaryOrange-300 lg:flex-row">
            {skillsList.map((items, i) => (
              <div
                className="flex items-center p-2 md:flex-col"
                key={`${items.skill}_${i}`}
              >
                <a href="" className="h-full w-fit">
                  {items.icon}
                </a>
                <p>{items.skill}</p>
              </div>
            ))}
          </div>
          <div className="h-5/6 w-full">
            <Box3js />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
