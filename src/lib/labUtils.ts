import fs from "fs";
import path, { resolve } from "path";
import { readdir } from "fs/promises";

export const LABS_PATH = path.join(process.cwd(), "/src/pages/labs/");

export const getAllLabs = async (dir = LABS_PATH) => {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getAllLabs(res) : res;
    })
  );
  return Array.prototype.concat(...files);
};
