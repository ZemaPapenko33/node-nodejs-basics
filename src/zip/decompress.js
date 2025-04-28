import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  try {
    const readStream = fs.createReadStream("./files/archive.gz");
    const writeStream = fs.createWriteStream("./files/fileToCompress.txt");
    const decompressStream = zlib.createGunzip();

    readStream.on("error", () => {
      throw new Error("Read stream error");
    });
    decompressStream.on("error", () => {
      throw new Error("Compress stream error");
    });
    writeStream.on("error", () => {
      throw new Error("Write stream error");
    });

    readStream.pipe(decompressStream).pipe(writeStream);
  } catch (error) {
    console.error(error.message);
  }
};

await decompress();
