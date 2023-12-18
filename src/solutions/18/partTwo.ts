import { Input } from ".";
import { Direction } from "../../utils";

const mapNumberToDirection = {
  0: Direction.RIGHT,
  1: Direction.DOWN,
  2: Direction.LEFT,
  3: Direction.UP,
};

const decodeInstruction = (
  code: string
): { direction: Direction; meters: number } => ({
  meters: parseInt(code.slice(0, 5), 16),
  direction: mapNumberToDirection[code.slice(-1)],
});

export const partTwo = (input: Input) => {
  const coordinates: [number, number][] = [[0, 0]];
  let perimeter = 0;
  for (const { direction, meters } of input.map(({ code }) =>
    decodeInstruction(code)
  )) {
    const [x, y] = coordinates.at(-1);
    perimeter += meters;
    if (direction === Direction.UP) {
      coordinates.push([x, y + meters]);
    } else if (direction === Direction.DOWN) {
      coordinates.push([x, y - meters]);
    } else if (direction === Direction.LEFT) {
      coordinates.push([x - meters, y]);
    } else if (direction === Direction.RIGHT) {
      coordinates.push([x + meters, y]);
    }
  }
  const sum = coordinates.reduce((acc, [x1, y1], i, arr) => {
    if (i < arr.length - 1) {
      const [x2, y2] = arr[i + 1];
      return acc + x1 * y2 - x2 * y1;
    }
    return acc;
  }, 0);
  return Math.abs(sum) * 0.5 + Math.floor(perimeter / 2) + 1;
};
