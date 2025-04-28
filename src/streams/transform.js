import { Transform } from "stream";

const transform = async () => {
  try {
    const transformStream = new Transform({
      transform(chunk, encoding, callback) {
        const reverseChunk = chunk.toString().split("").reverse().join("");
        callback(null, reverseChunk);
      },
    });

    process.stdin.on("error", () => {
      throw new Error("Error on work with transform");
    });
    process.stdout.on("error", () => {
      throw new Error("Error on work with transform");
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
  } catch (error) {
    console.error(error.message);
  }
};

await transform();
