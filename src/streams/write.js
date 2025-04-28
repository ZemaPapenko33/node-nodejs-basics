import fs from "fs";

const write = async () => {
  try {
    const writeStream = fs.createWriteStream("./files/fileToWrite.txt");
    process.stdin.on("error", () => {
      throw new Error("Error in stdin");
    });

    writeStream.on("error", () => {
      throw new Error("Error when writing file");
    });

    process.stdin.pipe(writeStream);
  } catch (error) {
    console.error(error.message);
  }
};

await write();
