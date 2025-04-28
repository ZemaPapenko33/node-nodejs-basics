import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = fork("./files/script.js", args);

  childProcess.send({ type: "start", data: args });

  childProcess.on("message", (message) => {
    console.log("Message from child:", message);
  });

  childProcess.on("error", (err) => {
    console.error("Error spawning child process:", err);
  });

  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess([1, 2, 3, 4, 5]);
