import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  try {
    const cpuData = os.cpus().length;
    const promises = [];
    for (let i = 0; i < cpuData; i++) {
      promises.push(
        new Promise((resolve) => {
          const worker = new Worker("./worker.js", { workerData: 10 + i });

          worker.on("message", (data) => {
            resolve({ status: "resolved", data });
          });

          worker.on("error", () => {
            resolve({ status: "error", data: null });
          });
        })
      );
    }
    const settledResult = await Promise.all(promises);
    console.log(settledResult);
  } catch {}
};

await performCalculations();
