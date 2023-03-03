import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const AnimatedText = ({ wordArray }) => {
  return (
    <motion.p className="">
      {wordArray.map((word, i) => {
        {
          word;
        }
      })}
    </motion.p>
  );
};

export default AnimatedText;
