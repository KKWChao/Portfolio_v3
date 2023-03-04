import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function Box() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

const BoxComponent = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[-10, 4, 5]} />
      <Stars />
      <Box />
    </Canvas>
  );
};

export default BoxComponent;
