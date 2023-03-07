import React from "react";
import { Text, Text3D } from "@react-three/drei";

const Ptext = ({ children }) => {
  return (
    <mesh>
      <Text scale={[3, 3, 4]} color="black" position={[0, 0, 0]}>
        {children}
      </Text>
    </mesh>
  );
};

export default Ptext;
