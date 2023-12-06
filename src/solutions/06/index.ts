import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocessPartOne = (text: string): number[][] => {
  const times = text
    .match(/Time:\s+(.*)/)[1]
    .split(/\s+/)
    .map(Number);
  const distances = text
    .match(/Distance:\s+(.*)/)[1]
    .split(/\s+/)
    .map(Number);
  return times.reduce(
    (acc, val, index) => [...acc, [val, distances[index]]],
    []
  );
};

const preprocessPartTwo = (text: string): [number, number] => {
  const time = text
    .match(/Time:\s+(.*)/)[1]
    .split(/\s+/)
    .join("");
  const distance = text
    .match(/Distance:\s+(.*)/)[1]
    .split(/\s+/)
    .join("");
  return [+time, +distance];
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const inputPartOne = preprocessPartOne(text);
  const inputPartTwo = preprocessPartTwo(text);
  return isPartTwo ? partTwo(inputPartTwo) : partOne(inputPartOne);
};
