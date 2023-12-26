import { calculateSupportBricks, simulateBricksFalling } from "./utils";

const overlaps = (brickA: number[], brickB: number[]) =>
  Math.max(brickA[0], brickB[0]) <= Math.min(brickA[3], brickB[3]) &&
  Math.max(brickA[1], brickB[1]) <= Math.min(brickA[4], brickB[4]);

export const partTwo = (input: number[][]) => {
  simulateBricksFalling(input);
  input.sort((a, b) => a[2] - b[2]);
  const [brickSupports, brickIsSupportedBy] = calculateSupportBricks(input);
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const queue = brickSupports[i].filter(
      (j) => brickIsSupportedBy[j].length === 1
    );
    const falling = [...queue];
    while (queue.length > 0) {
      const j = queue.shift();
      for (const k of brickSupports[j]) {
        if (
          !falling.includes(k) &&
          brickIsSupportedBy[k].every((val) => falling.includes(val))
        ) {
          queue.push(k);
          falling.push(k);
        }
      }
    }
    count += falling.length;
  }
  return count;
};
