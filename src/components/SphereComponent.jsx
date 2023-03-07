import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SphereComponent = () => {
  function Sphere() {
    const meshRef = useRef(null);

    useFrame(() => {
      if (!meshRef.current) {
        return;
      }

      meshRef.current.rotation.x += 0.0009;
      meshRef.current.rotation.y += 0.0009;
    });

    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[3]} />
        <meshBasicMaterial color="grey" wireframe={true} />
      </mesh>
    );
  }
  return <Sphere />;
};

export default SphereComponent;
