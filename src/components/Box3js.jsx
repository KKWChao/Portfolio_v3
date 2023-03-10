import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html, PerspectiveCamera } from "@react-three/drei";
import { DoubleSide } from "three";

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

// for box sizing
const boxSize = [1, 1, 1];

// random array for random vector location
const randomVectorGenerator = (min, max, n = 3) => {
  return Array.from({ length: n }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
};

const Box = (props) => {
  const ref = useRef();
  const [clicked, click] = useState(false);

  // INDEPENDENT ROTATIONS
  // useFrame(
  //   (state, delta) =>
  //     (ref.current.rotation.x = ref.current.rotation.y += delta * props.speed)
  // );

  // MOUSE EFFECT
  // useFrame(({ mouse, viewport }) => {
  //   const x = (mouse.x * viewport.width) / 2.5;
  //   const y = (mouse.y * viewport.height) / 2.5;
  //   ref.current.lookAt(x, y, 1);
  // });
  const [hovered, hover] = useState(false);

  return (
    <mesh
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={clicked ? 1.25 : 1}
      onClick={(event) => click(!clicked)}
      position={props.position}
      color={hovered ? "white" : "green"}
    >
      <boxGeometry args={props.size} />
      <meshLambertMaterial
        attach="material"
        // transparent="1"
        map={useLoader(THREE.TextureLoader, props.image)}
      />
      {/* ADDING TAG TO EACH ITEM FOR LEGIBILITY */}
      {/* <Html distanceFactor={3}>test</Html> */}
    </mesh>
  );
};

const Box3js = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial color={"green"} side={DoubleSide} />
      </mesh>
      <Box size={boxSize} position={[0, 0.5, 0]} image={htmlIcon} />
    </group>

    // BOXES
    // <Box size={boxSize} position={[1, 0.5, 0]} image={mongoIcon} />

    // <Box size={boxSize} position={[0.5, -0.5, 0]} image={tailwindIcon} />
    // <Box size={boxSize} position={[-0.5, 0.5, 0]} image={expressIcon} />
    // <Box size={boxSize} position={[1, 1, 0]} image={cssIcon} />
    // <Box size={boxSize} position={[0, 0, 0]} image={jsIcon} />
    // <Box size={boxSize} position={[-1, 0, 0]} image={nodeIcon} />
    // <Box size={boxSize} position={[1, 0, 0]} image={reactIcon} />
    // <Box size={boxSize} position={[0, -1, 0]} image={bootstrapIcon} />
    // <Box size={boxSize} position={[-1, -1, 0]} image={sqlIcon} />
    // <OrbitControls />
  );
};

export default Box3js;
