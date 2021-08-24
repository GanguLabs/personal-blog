import matter from "gray-matter";
import { asyncForEach } from "../../../utils";
import { fdir } from "fdir";
import { POSTS_PATH } from "..";
import path from "path";

import fs from "fs";
const { readFile } = fs.promises;

//reads the file
export const getSourceOfFile = (path: string) => {
  return fs.readFileSync(path, "utf-8");
};

//Searches the posts folders for .mdx files and returns the path and the foldername where the .mdx file was found
export const getFilePaths = (
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
