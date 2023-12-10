import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Input = [string[], [number, number]];

const preprocess = (text: string): Input => {
  const lines = text.split("\n");
  const i = lines.findIndex((val) => val.includes("S"));
  const j = lines[i].indexOf("S");
  return [lines, [i, j]];
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
