import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocess = (text: string) =>
  text
    .split("\n")
    .map((line) =>
      line
        .split("~")
        .map((line) => line.split(","))
        .flat()
        .map(Number)
    )
    .sort((a, b) => a[2] - b[2]);

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
