import fs from "fs";
import crypto from "crypto";
import { pipeline } from "stream";
import { promisify } from "util";

// Преобразуем pipeline в промис для асинхронного использования
const pipe = promisify(pipeline);

const calculateHash = async () => {
  try {
    const hash = crypto.createHash("sha256");
    const readStream = fs.createReadStream(
      "./files/fileToCalculateHashFor.txt"
    );

    await pipe(readStream, hash);

    console.log(hash.digest("hex"));
  } catch (error) {
    console.error("Error during hash calculation:", error);
  }
};

await calculateHash();
