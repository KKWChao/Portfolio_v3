import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

const SphereComponent = () => {
  function Sphere() {
    return (
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh>
          <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={30}>
            <pointLight intensity={0.5} position={[-10, -25, 10]} />
            <spotLight
              castShadow
              intensity={2.25}
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
          </PerspectiveCamera>
          <sphereGeometry args={[8]} />
          <meshBasicMaterial color="grey" wireframe={true} />
        </mesh>
        <mesh>
          <sphereGeometry args={[5]} />
          <meshPhongMaterial color="red" />
        </mesh>
        <mesh position={[8, 4, -8]}>
          <sphereGeometry args={[2]} />
          <meshBasicMaterial color="white" />
          {/* <OrbitControls target={(0, 0, 0)} /> */}
        </mesh>
      </group>
    );
  }
  return <Sphere />;
};

export default SphereComponent;
