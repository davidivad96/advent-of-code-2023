import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocess = (text: string): [string, number][] =>
  text.split("\n").map((line) => [line.split(" ")[0], +line.split(" ")[1]]);

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
