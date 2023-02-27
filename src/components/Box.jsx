const Box = () => {
  return (
    <mesh onClick={() => {}} position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  );
};

export default Box;
