import fs from "fs";

const rename = async () => {
  try {
    await fs.promises.stat("./files/wrongFilename.txt");

    try {
      await fs.promises.stat("./files/properFilename.md");
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }

    await fs.promises.rename(
      "./files/wrongFilename.txt",
      "./files/properFilename.md"
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
