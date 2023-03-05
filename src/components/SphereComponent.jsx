import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

function Sphere() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2]} />
      <meshBasicMaterial color="grey" wireframe={true} />
    </mesh>
  );
}

const SphereComponent = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[-10, 4, 5]} />
      <Stars />
      <Sphere />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default SphereComponent;
