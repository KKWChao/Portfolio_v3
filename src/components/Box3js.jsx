import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html, PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

import htmlIcon from "@/assets/textures/icons8-html-5-480.png";
import cssIcon from "@/assets/textures/icons8-css3-480.png";
import jsIcon from "@/assets/textures/icons8-javascript-480.png";
import reactIcon from "@/assets/textures/icons8-react-480.png";
import bootstrapIcon from "@/assets/textures/icons8-bootstrap-480.png";
import tailwindIcon from "@/assets/textures/icons8-tailwindcss-480.png";
import expressIcon from "@/assets/textures/icons8-express-js-500.png";
import nodeIcon from "@/assets/textures/icons8-node-js-512.png";
import mongoIcon from "@/assets/textures/MongoDB_Logomark_SlateBlue.png";
import sqlIcon from "@/assets/textures/mysql.png";

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

// Box focus on mouse effect
function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

const Box = (props) => {
  const ref = useRef();
  const [clicked, click] = useState(false);

  // INDEPENDENT ROTATIONS
  // useFrame(
  //   (state, delta) =>
  //     (ref.current.rotation.x = ref.current.rotation.y += delta * props.speed)
  // );

  // MOUSE EFFECT
  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5;
    const y = (mouse.y * viewport.height) / 2.5;
    ref.current.lookAt(x, y, 1);
  });
  const [hovered, hover] = useState(false);

  return (
    <mesh
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={clicked ? 1.25 : 1}
      onClick={(event) => click(!clicked)}
      position={props.position}
    >
      <boxGeometry args={props.size} />
      <meshLambertMaterial
        attach="material"
        transparent
        map={useLoader(THREE.TextureLoader, props.image)}
        color={hovered ? "grey" : "white"}
      />
      {/* ADDING TAG TO EACH ITEM FOR LEGIBILITY */}
      {/* <Html distanceFactor={3}>test</Html> */}
    </mesh>
  );
};

const Box3js = () => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={5}
        position={[0, 0, 100]}
        rotation={[0, 0, 0]} // gotta fix rotations?
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      {/* BOXES */}
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[0.5, 0.5, 0]}
        image={mongoIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[-0.5, -0.5, 0]}
        image={htmlIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[0.5, -0.5, 0]}
        image={tailwindIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[-0.5, 0.5, 0]}
        image={expressIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[1, 1, 0]}
        image={cssIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[0, 0, 0]}
        image={jsIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[-1, 0, 0]}
        image={nodeIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[1, 0, 0]}
        image={reactIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[0, 1, 0]}
        image={tailwindIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[0, -1, 0]}
        image={bootstrapIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[-1, -1, 0]}
        image={sqlIcon}
        speed={randomSpeed()}
      />

      <Box
        size={[0.5, 0.5, 0.5]}
        position={[-1, 1, 0]}
        image={sqlIcon}
        speed={randomSpeed()}
      />
      <Box
        size={[0.5, 0.5, 0.5]}
        position={[1, -1, 0]}
        image={sqlIcon}
        speed={randomSpeed()}
      />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Box3js;
