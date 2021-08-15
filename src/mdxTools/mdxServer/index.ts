import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { asyncForEach } from "../utils";
const { readdir, readFile } = fs.promises;
import { remarkMdxImages } from "remark-mdx-images";
import { fdir } from "fdir";

interface Components {
  [file: string]: string;
}

//Path to the posts folder
export const POSTS_PATH = path.join(process.cwd(), "/src/data/posts");
export const POSTS_PATH_TEMP = path.join(process.cwd(), "/src/_posts");

//Reads the source of a file
export const getSourceOfFile = (fileName: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName), "utf-8");
};

export const getSourceOfFileNew = (path: string) => {
  return fs.readFileSync(path, "utf-8");
};

//Searches the posts folders for .mdx files and returns the path and the foldername where the .mdx file was found
const getMdxFilePaths = (
  path: string
): { filePath: string; folderName: string }[] => {
  const mdxCrawler = new fdir()
    .filter((path) => path.endsWith(".mdx"))
    .withFullPaths();

  const files = mdxCrawler.crawl(path).sync() as string[];

  const fileNames = files.map((filePath) => {
    const fileSplit = filePath.split("\\");
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
  const fileNames = getMdxFilePaths(POSTS_PATH_TEMP);
  const content = fileNames.map((fileObj) => {
    const source = getSourceOfFileNew(fileObj.filePath);
    const { data } = matter(source);
    const slug = fileObj.folderName;

    return {
      frontmatter: data,
      slug: slug,
    };
  });

  return content;
};

//prepares a single MDX file to serve to the client
export const prepareMDX = async (
  directoryName: string,
  options: {
    files?: Record<string, string>;
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

  const directory = path.join(POSTS_PATH_TEMP, "/", directoryName);

  const source = getSourceOfFileNew(directory + "\\index.mdx");

  const { files, imagesUrl } = options;

  const { code, frontmatter } = await bundleMDX(source, {
    files,
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
      options.publicPath = path.join(process.cwd(), "/public/img");
      options.write = true;

      return options;
    },
  });

  return { frontmatter, code };
};

export const prepareMDXNew = async (
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
