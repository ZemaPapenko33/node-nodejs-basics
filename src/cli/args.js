const parseArgs = () => {
  const keyRegex = /^--prop.*Name$/;

  for (let i = 2; i < process.argv.length; i += 2) {
    const key = process.argv[i];
    const value = process.argv[i + 1];
    if (!keyRegex.test(key)) {
      throw new Error(`Invalid key format: ${key}`);
    }
    if (!value || value.trim() === "") {
      throw new Error(`Value for ${key} is empty`);
    }

    console.log(`${key}=${value}`);
  }
};

parseArgs();
