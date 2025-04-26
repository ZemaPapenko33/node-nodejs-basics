import fs from "fs";

const read = async () => {
  try {
    const fileText = await fs.promises.readFile(
      "./files/fileToRead.txt",
      "utf-8"
    );
    console.log(fileText);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
