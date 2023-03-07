import notoFont from "../assets/textures/Noto Sans Black_Regular.json";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
extend({ TextGeometry });
const AnimatedText = () => {
  const font = new FontLoader().parse(notoFont);

  return (
    <mesh position={[-2, 0, 0]}>
      <textGeometry args={["greener", { font, size: 2, height: 0.2 }]} />
      <meshPhysicalMaterial attach="material" color={"white"} />
    </mesh>
  );
};

export default AnimatedText;
