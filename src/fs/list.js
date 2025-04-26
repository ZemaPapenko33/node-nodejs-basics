import fs from "fs";

const list = async () => {
  try {
    const files = await fs.promises.readdir("./files");
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
