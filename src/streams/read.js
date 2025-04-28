import fs from "fs";

const read = async () => {
  try {
    const readStream = fs.createReadStream("./files/fileToRead.txt");
    const errorHandler = () => {
      throw new Error("Error when read file");
    };
    readStream.on("error", errorHandler).pipe(process.stdout);
  } catch (error) {
    throw new Error(error.message);
  }
};

await read();
