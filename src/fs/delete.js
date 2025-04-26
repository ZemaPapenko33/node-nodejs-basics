import fs from "fs";

const remove = async () => {
  try {
    await fs.promises.stat("./files/fileToRemove.txt");
    await fs.promises.unlink("./files/fileToRemove.txt");
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
