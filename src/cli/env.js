const parseEnv = () => {
  for (const startString in process.env) {
    if (startString.startsWith("RSS_")) {
      console.log(`${startString}=${process.env[startString]}`);
    }
  }
};

parseEnv();
