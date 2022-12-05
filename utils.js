const fs = require("fs/promises");
const { resolve, join } = require("path");

module.exports = {
  readInput: async (dirname) => {
    const input = await fs.readFile(
      resolve(join(dirname, "./input.txt")),
      "utf8"
    );
    const lines = input.split("\n");
    return lines;
  },
};
