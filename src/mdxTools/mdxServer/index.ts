import path from "path";
import { bundleMDX } from "mdx-bundler";
import { remarkMdxImages } from "remark-mdx-images";
import { getSourceOfFile } from "./utils";

export * from "./utils";

//Path to the posts folder
export const POSTS_PATH = path.join(process.cwd(), "/src/_posts");

//prepares a single MDX file to serve to the client
export const prepareMDX = async (directoryName: string) => {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const directory = path.join(POSTS_PATH, "/", directoryName);

  const source = getSourceOfFile(directory + "/index.mdx");

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: directory,
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
      ];

      return options;
    },
    esbuildOptions: (options) => {
      options.outdir = path.join(process.cwd(), "/public/img");
      options.loader = {
        ...options.loader,
        ".png": "file",
        ".jpg": "file",
        ".gif": "file",
        ".mp3": "file",
      };
      options.publicPath = "/img/";
      options.write = true;

      return options;
    },
    globals: {
      "@react-three/fiber": {
        varName: "reactThreeFiber",
        namedExports: ["Canvas", "useFrame"],
        defaultExport: false,
      },
      "@react-three/drei": {
        varName: "reactThreeDrei",
        namedExports: ["Box", "OrbitControls"],
      },
      react: { varName: "reactGlobal", namedExports: ["useRef", "useState"] },
    },
  });

  return { frontmatter, code };
};
