import { calculateSupportBricks, simulateBricksFalling } from "./utils";

export const partOne = (input: number[][]) => {
  simulateBricksFalling(input);
  input.sort((a, b) => a[2] - b[2]);
  const [brickSupports, brickIsSupportedBy] = calculateSupportBricks(input);
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (brickSupports[i].every((j) => brickIsSupportedBy[j].length >= 2)) {
      count++;
    }
  }
  return count;
};
