import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import htmlIcon from "@/assets/textures/icons8-html-5-480.png";
import cssIcon from "@/assets/textures/icons8-css3-480.png";
import jsIcon from "@/assets/textures/icons8-javascript-480.png";
import reactIcon from "@/assets/textures/icons8-react-480.png";
import { OrbitControls } from "@react-three/drei";

// random array for random vector location
const randomVectorGenerator = (min, max, n = 3) => {
  return Array.from({ length: n }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
};

// random speed generator
const randomSpeed = () => {
  return Math.random() * 2.5 * (Math.round(Math.random()) ? 1 : -1);
};

const Box = (props) => {
  const ref = useRef();
  useFrame(
    (state, delta) =>
      (ref.current.rotation.x = ref.current.rotation.y += delta * props.speed)
  );
  const [hovered, hover] = useState(false);

  return (
    <mesh
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      position={props.position}
    >
      <boxGeometry args={props.size} />
      <meshLambertMaterial
        attach="material"
        transparent
        map={useLoader(THREE.TextureLoader, props.image)}
        color={hovered ? "grey" : "white"}
      />
    </mesh>
  );
};

const Box3js = () => {
  return (
    <Canvas camera={{ position: [0, 20, 0], fov: 5 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[-0.5, 0, 1]}
        image={htmlIcon}
        speed={randomSpeed()}
      />
      <Box position={[0.5, 0, 0]} image={cssIcon} speed={randomSpeed()} />
      <Box position={[-1.5, 0, 0]} image={jsIcon} speed={randomSpeed()} />
      <Box position={[1.5, 0, 1]} image={reactIcon} speed={randomSpeed()} />
      <OrbitControls />
    </Canvas>
  );
};

export default Box3js;
