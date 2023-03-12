import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

//

const OrbitSphere = ({ position, orbitalOffset = 0, orbitalSpeed = 1 }) => {
  const ref = useRef();
  useFrame(() => {
    let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset;
    ref.current.position.set(
      Math.cos(date) * 20 + position[0],
      Math.sin(date) * 20 + position[1],
      Math.sin(date) * 20 + position[2]
    );
  });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[2]} />
      <meshLambertMaterial color={0x58a7af} emissive={0x58a7af} />
    </mesh>
  );
};

const SunSphere = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[5]} />
      <meshPhongMaterial color={0xbb4430} emissive={0xbb4430} />
    </mesh>
  );
};

const DysonSphere = ({ position }) => {
  const spinnerRef = useRef();
  useFrame(({ clock }) => {
    spinnerRef.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={spinnerRef}
      rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}
    >
      <sphereGeometry args={[8]} />
      <meshBasicMaterial
        color="grey"
        wireframe={true}
        ref={spinnerRef}
        rotation={[]}
      />
    </mesh>
  );
};

const SphereComponent = () => {
  return (
    <group>
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
      <DysonSphere position={[0, 0, 0]} />
      <SunSphere position={[0, 0, 0]} />
      <OrbitSphere position={[0, 0, 0]} />
    </group>
  );
};

export default SphereComponent;
