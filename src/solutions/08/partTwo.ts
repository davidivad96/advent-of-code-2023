import { Input } from ".";
import { instructionsGenerator } from "./utils";
import { lcm } from "../../utils";

export const partTwo = ([instructions, nodes]: Input) => {
  let currentNodes = Object.keys(nodes).filter((node) => node.endsWith("A"));
  let count = 0;
  let counts: number[] = [];
  for (const instruction of instructionsGenerator(instructions)) {
    currentNodes = currentNodes.map(
      (currentNode) => nodes[currentNode][instruction]
    );
    count++;
    const index = currentNodes.findIndex((node) => node.endsWith("Z"));
    if (index !== -1) {
      counts.push(count);
      currentNodes.splice(index, 1);
    }
    if (currentNodes.length === 0) {
      return lcm(counts);
    }
  }
};
