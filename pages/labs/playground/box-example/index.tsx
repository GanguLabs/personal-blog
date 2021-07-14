import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "components/labs/ripple/Box";
import { OrbitControls } from "@react-three/drei";

function AnimationCanvas() {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 35 }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Box position={[10, 0, 0]} />
      <Box position={[-10, 0, 0]} />
      <Box position={[0, 10, 0]} />
      <Box position={[0, -10, 0]} />
      <OrbitControls />
    </Canvas>
  );
}

const Boxes = () => {
  return <AnimationCanvas />;
};

export default Boxes;
