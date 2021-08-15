import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box as NativeBox, OrbitControls } from "@react-three/drei";

function Box(props) {
  const mesh = useRef(null);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const color = props.color || "#720b23";

  return (
    <NativeBox
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
      scale={active ? [6, 6, 6] : [5, 5, 5]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        attach="material"
        color={hovered ? "#2b6c76" : color}
      />
    </NativeBox>
  );
}

function AnimationCanvas({ color }) {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 20 }}>
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
