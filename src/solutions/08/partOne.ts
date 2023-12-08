import { Input } from ".";
import { instructionsGenerator } from "./utils";

export const partOne = ([instructions, nodes]: Input) => {
  let currentNode = "AAA";
  let count = 0;
  for (const instruction of instructionsGenerator(instructions)) {
    currentNode = nodes[currentNode][instruction];
    count++;
    if (currentNode === "ZZZ") {
      return count;
    }
  }
};
