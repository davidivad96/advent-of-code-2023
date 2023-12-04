import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const regex = new RegExp(/(\d+(?:\s+\d+)*)\s+\|\s+(\d+(?:\s+\d+)*)/);

const toNumbers = (text: string) =>
  text.replace(/\s+/g, " ").split(" ").map(Number);

const preprocess = (text: string) =>
  text.split("\n").map((line) => {
    const [_, winning, having] = line.match(regex);
    return { winning: toNumbers(winning), having: toNumbers(having) };
  });

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
