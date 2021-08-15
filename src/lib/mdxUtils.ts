import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { asyncForEach } from "../lib/utils";
const { readdir, readFile } = fs.promises;
import { remarkMdxImages } from "remark-mdx-images";

interface Components {
  [file: string]: string;
}

export const POSTS_PATH = path.join(process.cwd(), "/src/data/posts");

export const getSourceOfFile = (fileName: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName), "utf-8");
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    });
};

export const getSinglePost = async (slug: string) => {
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
  const source = getSourceOfFile(slug + ".mdx");

  const { code, frontmatter } = await bundleMDX(source, {
    esbuildOptions(options) {
      options.minify = false;
      // options.target = [
      //   "es2020",
      //   "chrome58",
      //   "firefox57",
      //   "safari11",
      //   "edge16",
      //   "node12",
      // ];

      return options;
    },
    cwd: POSTS_PATH,
    globals: {
      three: "three",
    },
  });

  return {
    frontmatter,
    code,
  };
};

export const prepareMDX = async (
  slug: string,
  options: {
    files?: Record<string, string>;
    directory?: string;
    imagesUrl?: string;
  }
) => {
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

  const source = getSourceOfFile(slug + ".mdx");

  const { directory = POSTS_PATH, imagesUrl } = options;

  const { code, frontmatter } = await bundleMDX(source, {
    files: options.files,
    cwd: path.join(process.cwd(), "/src/data/posts"),
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
      ];

      return options;
    },
    esbuildOptions: (options) => {
      // options.target = ["es2020"];
      options.outdir = path.join(process.cwd(), "/public/img");
      options.loader = {
        ...options.loader,
        ".png": "file",
        ".jpg": "file",
        ".gif": "file",
        ".mp3": "file",
      };
      options.publicPath = path.join(process.cwd(), "/public/img");
      options.write = true;

      return options;
    },
  });

  return { frontmatter, code };
};

export const getComponents = async (folder: string) => {
  const components: Components = {};

  const directory = POSTS_PATH + folder;

  const files = await readdir(directory);

  await asyncForEach(files, async (file) => {
    if (file.substr(-3) === "tsx") {
      const fileBuffer = await readFile(path.join(directory, file));

      components[`./${file}`] = fileBuffer.toString().trim();
    }
  });

  return components;
};
