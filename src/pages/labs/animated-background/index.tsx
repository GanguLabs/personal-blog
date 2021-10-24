import * as THREE from "three";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box as ChakraBox } from "@chakra-ui/react";
import { useGLTF, Environment } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

type GLTFResult = GLTF & {
  nodes: {
    PolarBear_1: THREE.Mesh;
    PolarBear_2: THREE.Mesh;
    PolarBear_3: THREE.Mesh;
  };
  materials: {
    Peluches_escandalosospolySurface35SG1: THREE.MeshStandardMaterial;
    Peluches_escandalosospolySurface11SG: THREE.MeshStandardMaterial;
    Peluches_escandalosospolySurface21SG1: THREE.MeshStandardMaterial;
  };
};

function PolarBear({
  zPos,
  ...props
}: {
  zPos: number;
  props?: JSX.IntrinsicElements["group"];
}) {
  const ref = useRef<THREE.Group>();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(
    camera,
    new THREE.Vector3(0, 0, zPos)
  );

  const { nodes, materials } = useGLTF(
    "/models/PolarBear-transformed.glb"
  ) as GLTFResult;

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2), // 6 gives us -3 to 3
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI * 2,
    rY: Math.random() * Math.PI * 2,
    rZ: Math.random() * Math.PI * 2,
  });

  useFrame(() => {
    ref.current.position.set(data.x * width, (data.y += 0.01), zPos);

    if (data.y > height / 1) {
      data.y = -height / 1;
    }
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.004),
      (data.rZ += 0.0005)
    );
  });

  return (
    <group ref={ref} {...props} dispose={null} scale={0.75}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-2.33, -1.96, -0.09]}>
          <group position={[2.43, 1.96, 0.12]}>
            <mesh
              geometry={nodes.PolarBear_1.geometry}
              material={materials.Peluches_escandalosospolySurface35SG1}
            />
            <mesh
              geometry={nodes.PolarBear_2.geometry}
              material={materials.Peluches_escandalosospolySurface11SG}
            />
            <mesh
              geometry={nodes.PolarBear_3.geometry}
              material={materials.Peluches_escandalosospolySurface21SG1}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export default function AnimatedBackground({ count = 100 }) {
  return (
    <ChakraBox position="absolute" top="0" left="0" width="100%" height="100%">
      <Canvas
        gl={{ alpha: false, antialias: false }}
        camera={{ position: [0, 0, 10], near: 0.01, far: 120 }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["rgb(5, 11, 22)"]} />
        <spotLight position={[10, 20, 10]} penumbra={1} intensity={2} />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          {Array.from({ length: count }, (_, i) => (
            <PolarBear key={i} zPos={-i} />
          ))}
          <EffectComposer multisampling={0}>
            <DepthOfField
              target={[0, 0, 40]}
              focalLength={0.5}
              bokehScale={0.75}
              height={500}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </ChakraBox>
  );
}
