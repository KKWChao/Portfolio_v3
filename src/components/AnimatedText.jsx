import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ wordArray, fontSize }) => {
  return (
    <motion.div className="flex justify-center overflow-auto">
      {wordArray.map((word, i) => (
        <motion.span
          className="px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: "true",
          }}
          transition={{
            delay: 0.1 * i,
            duration: 0.3,
            ease: "easeInOut",
          }}
          whileHover={{
            opacity: 0.5,
          }}
          variants={{
            hidden: {
              opacity: 0,
              z: 10,
              fontSize: "0",
            },
            visible: {
              opacity: 1,
              z: 0,
              fontSize: "2rem",
            },
          }}
          key={`${word}+${i}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
