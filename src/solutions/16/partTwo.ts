import { Direction, calculateEnergy } from "./utils";

export const partTwo = (input: string[][]) => {
  let max = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (i === 0) {
        max = Math.max(max, calculateEnergy(input, [i, j], Direction.DOWN));
      }
      if (j === 0) {
        max = Math.max(max, calculateEnergy(input, [i, j], Direction.RIGHT));
      }
      if (i === input.length - 1) {
        max = Math.max(max, calculateEnergy(input, [i, j], Direction.UP));
      }
      if (j === input[0].length - 1) {
        max = Math.max(max, calculateEnergy(input, [i, j], Direction.LEFT));
      }
    }
  }
  return max;
};
