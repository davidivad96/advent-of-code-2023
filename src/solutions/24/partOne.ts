import { calculateIntersectionPoint, crossedInPast } from "./utils";

const LOWER_BOUND = 200000000000000;
const UPPER_BOUND = 400000000000000;

export const partOne = (input: number[][]) => {
  let validIntersections = 0;
  for (const [i, hailstoneA] of input.entries()) {
    for (let j = i + 1; j < input.length; j++) {
      const hailstoneB = input[j];
      const [px1, py1, _, vx1, vy1] = hailstoneA;
      const [px2, py2, __, vx2, vy2] = hailstoneB;
      const { x, y } = calculateIntersectionPoint(
        px1,
        py1,
        px1 + vx1,
        py1 + vy1,
        px2,
        py2,
        px2 + vx2,
        py2 + vy2
      );
      if (
        x >= LOWER_BOUND &&
        x <= UPPER_BOUND &&
        y >= LOWER_BOUND &&
        y <= UPPER_BOUND &&
        !crossedInPast(x, px1, vx1) &&
        !crossedInPast(y, py1, vy1) &&
        !crossedInPast(x, px2, vx2) &&
        !crossedInPast(y, py2, vy2)
      ) {
        validIntersections++;
      }
    }
  }
  return validIntersections;
};
