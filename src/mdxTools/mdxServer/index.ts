import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { asyncForEach } from "../../utils";
const { readFile } = fs.promises;
import { remarkMdxImages } from "remark-mdx-images";
import { fdir } from "fdir";

//Path to the posts folder
export const POSTS_PATH = path.join(process.cwd(), "/src/_posts");

//reads the file
export const getSourceOfFile = (path: string) => {
  return fs.readFileSync(path, "utf-8");
};

//Searches the posts folders for .mdx files and returns the path and the foldername where the .mdx file was found
const getFilePaths = (
  pathName: string,
  extension: string
): { filePath: string; folderName: string }[] => {
  const mdxCrawler = new fdir()
    .filter((pathName) => pathName.endsWith(extension))
    .withFullPaths();

  const files = mdxCrawler.crawl(pathName).sync() as string[];

  const fileNames = files.map((filePath) => {
    const fileSplit = filePath.split(path.sep);
    const fileSplitLength = fileSplit.length;
    return {
      filePath: filePath,
      folderName: fileSplit[fileSplitLength - 2],
    };
  });

  return fileNames;
};

//prases the mdx files and returns the frontmatter and slug
export const getAllPosts = () => {
  const fileNames = getFilePaths(POSTS_PATH, ".mdx");
  const content = fileNames.map((fileObj) => {
    const source = getSourceOfFile(fileObj.filePath);
    const { data } = matter(source);
    const slug = fileObj.folderName;

    return {
      frontmatter: data,
      slug: slug,
    };
  });

  return content;
};

interface Components {
  [file: string]: string;
}
export const getComponents = async (directoryName: string) => {
  const components: Components = {};

  const directory = path.join(POSTS_PATH, "/", directoryName);
  const files = getFilePaths(directory, ".tsx");

  await asyncForEach(files, async (file) => {
    const fileBuffer = await readFile(file.filePath);

    components[file.filePath] = fileBuffer.toString().trim();
  });

  return components;
};

// interface IFrontmatter {
//   title: string;
//   publishedAt: string;
//   lastEditedAt: string;
//   summary: string;
//   description: string;
//   draft: string;
//   tags: string[];
//   seoImage: string;
// }

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
      "@react-three/fiber": "reactThreeFiber",
      "@react-three/drei": "reactThreeDrei",
    },
  });

  return { frontmatter, code };
};
