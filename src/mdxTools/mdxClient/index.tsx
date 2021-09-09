import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { components } from "./components";

export const MDX: React.FC<{ source: string }> = ({ source }) => {
  const Component = useMemo(() => getMDXComponent(source), [source]);
  return <Component components={{ ...components }} />;
};
