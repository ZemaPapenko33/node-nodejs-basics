import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const childStream = spawn("node", ["./files/script.js", ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(childStream.stdin);

  childStream.stdout.pipe(process.stdout);

  childStream.on("error", (err) => {
    console.error("Error spawning child process:", err);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 4, 5]);
