import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Input = [string, number[]][];

const preprocess = (text: string): Input =>
  text
    .split("\n")
    .map((line) => line.split(" "))
    .map((row) => [row[0], row[1].split(",").map(Number)]);

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
