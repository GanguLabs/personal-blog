import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "components/labs/ripple/Box";
import { OrbitControls } from "@react-three/drei";

function AnimationCanvas({ color }) {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 35 }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Box position={[10, 0, 0]} color={color} />
      <Box position={[-10, 0, 0]} color={color} />
      <Box position={[0, 10, 0]} color={color} />
      <Box position={[0, -10, 0]} color={color} />
      <OrbitControls />
    </Canvas>
  );
}

const Boxes = ({ color }) => {
  return <AnimationCanvas color={color} />;
};

export default Boxes;
