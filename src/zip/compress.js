import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  try {
    const readStream = fs.createReadStream("./files/fileToCompress.txt");
    const compressStream = zlib.createGzip();
    const writeStream = fs.createWriteStream("./files/archive.gz");

    readStream.on("error", () => {
      throw new Error("Read stream error");
    });
    compressStream.on("error", () => {
      throw new Error("Compress stream error");
    });
    writeStream.on("error", () => {
      throw new Error("Write stream error");
    });

    readStream.pipe(compressStream).pipe(writeStream);
  } catch (error) {
    console.error(error.message);
  }
};

await compress();
