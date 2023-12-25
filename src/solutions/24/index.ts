import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocess = (text: string) =>
  text
    .split("\n")
    .map((line) => line.split("@"))
    .map(([positions, velocities]) => [
      ...positions.split(",").map(Number),
      ...velocities.split(",").map(Number),
    ]);

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
