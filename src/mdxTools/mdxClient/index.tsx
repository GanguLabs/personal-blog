import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { components } from "./components";

//import globals
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import React from "react";

export const MDX: React.FC<{ source: string }> = ({ source }) => {
  const Component = useMemo(
    () =>
      getMDXComponent(source, {
        reactThreeFiber: { Canvas, useFrame },
        reactThreeDrei: { Box, OrbitControls },
        reactGlobal: React,
      }),
    [source]
  );
  return <Component components={{ ...components }} />;
};
