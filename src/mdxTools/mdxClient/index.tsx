import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { components } from "./components";

//Imports for globals
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

export const MDX: React.FC<{ source: string }> = ({ source }) => {
  const Component = useMemo(
    () =>
      getMDXComponent(source, {
        reactThreeFiber: { Canvas, useFrame },
        reactThreeDrei: { Box, OrbitControls },
      }),
    [source]
  );
  return <Component components={{ ...components }} />;
};
