import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { Direction } from "../../utils";

const mapStringToDirection = {
  U: Direction.UP,
  D: Direction.DOWN,
  L: Direction.LEFT,
  R: Direction.RIGHT,
};

export type Input = {
  direction: Direction;
  meters: number;
  code: string;
}[];

const preprocess = (text: string): Input =>
  text
    .split("\n")
    .map((line) => line.split(" "))
    .map(([direction, meters, code]) => ({
      direction: mapStringToDirection[direction],
      meters: +meters,
      code: code.slice(2, -1),
    }));

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
