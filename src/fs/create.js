import fs from "fs";

const create = async () => {
  try {
    await fs.promises.writeFile("./files/fresh.txt", "I am fresh and young", {
      flag: "wx",
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
