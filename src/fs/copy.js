import fs from "fs";
import path from "path";

const copy = async () => {
  try {
    await fs.promises.stat("./files");
    try {
      await fs.promises.stat("./files_copy");
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
    await fs.promises.mkdir("files_copy");
    const files = await fs.promises.readdir("./files");

    for (const file of files) {
      const srcPath = path.join("./files", file);
      const destPath = path.join("./files_copy", file);
      await fs.promises.copyFile(srcPath, destPath);
    }
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
