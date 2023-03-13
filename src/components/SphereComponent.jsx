import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

//

const OrbitSphere = ({
  position = [0, 0, 0],
  orbitalOffset = 0,
  orbitalSpeed = 1,
  orbitDistance = 2,
}) => {
  const ref = useRef();
  useFrame(() => {
    let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset;
    ref.current.position.set(
      Math.cos(date) * (orbitDistance * 10) + position[0],
      Math.sin(date) * (orbitDistance * 10) + position[1],
      Math.sin(date) * (orbitDistance * 10) + position[2]
    );
  });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[2]} />
      <meshPhysicalMaterial
        color={0x105ee5}
        emissive={0x0d47ab}
        clearcoat={1}
        clearcoatRoughness={0}
        roughness={2}
        metalness={0.2}
      />
    </mesh>
  );
};

const SunSphere = ({ position = [0, 0, 0] }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[5]} />
      <pointLight intensity={0.5} position={[0, 0, 0]} />
      <meshPhysicalMaterial
        color={0xff4d00}
        emissive={0xff4d00}
        clearcoat={1}
        clearcoatRoughness={0.2}
        roughness={0}
      />
    </mesh>
  );
};

const DysonSphere = () => {
  const spinnerRef = useRef();
  useFrame(({ clock }) => {
    spinnerRef.current.rotation.x = clock.getElapsedTime() / 2;
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
      <PerspectiveCamera makeDefault position={[0, 0, 30]} fov={50} />
      <DysonSphere />
      <SunSphere />
      <OrbitSphere />
      <OrbitSphere orbitalOffset={15} orbitalSpeed={2} />
    </group>
  );
};

export default SphereComponent;
