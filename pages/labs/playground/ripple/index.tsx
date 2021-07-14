import React, { useMemo } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import circleImg from "./assets/circle.png";
import Box from "components/labs/ripple/Box";
import { OrbitControls } from "@react-three/drei";

function Points() {
  // const imgTex = useLoader(THREE.TextureLoader, circleImg);

  const config = {
    count: 100,
    sep: 3,
  };
  //[x1, y1, z1, x2, y2, z2, ...]
  const positions = useMemo(() => {
    const positions = [];

    for (let xi = 0; xi < config.count; xi++) {
      for (let zi = 0; zi < config.count; zi++) {
        const x = config.sep * (xi - config.count / 2); //to be symmetric
        const z = config.sep * (zi - config.count / 2); //to be symmetric
        const y = 0;

        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, []);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        // map={imgTex}
        color={0x00aaff}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

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

const Ripple = () => {
  return <AnimationCanvas />;
};

export default Ripple;
