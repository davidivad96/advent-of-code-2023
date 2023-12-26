import { indexArrayToObject } from "../../utils";

export const overlaps = (brickA: number[], brickB: number[]) =>
  Math.max(brickA[0], brickB[0]) <= Math.min(brickA[3], brickB[3]) &&
  Math.max(brickA[1], brickB[1]) <= Math.min(brickA[4], brickB[4]);

export const simulateBricksFalling = (bricks: number[][]) => {
  for (const [i, brick] of bricks.entries()) {
    let maxZ = 1;
    for (const check of bricks.slice(0, i)) {
      if (overlaps(brick, check)) {
        maxZ = Math.max(maxZ, check[5] + 1);
      }
    }
    brick[5] -= brick[2] - maxZ;
    brick[2] = maxZ;
  }
};

export const calculateSupportBricks = (bricks: number[][]) => {
  const brickSupports: Record<number, number[]> = indexArrayToObject(
    bricks.length
  );
  const brickIsSupportedBy: Record<number, number[]> = indexArrayToObject(
    bricks.length
  );
  for (const [j, upper] of bricks.entries()) {
    for (const [i, lower] of bricks.slice(0, j).entries()) {
      if (overlaps(upper, lower) && upper[2] === lower[5] + 1) {
        brickSupports[i] = [...(brickSupports[i] || []), j];
        brickIsSupportedBy[j] = [...(brickIsSupportedBy[j] || []), i];
      }
    }
  }
  return [brickSupports, brickIsSupportedBy];
};
