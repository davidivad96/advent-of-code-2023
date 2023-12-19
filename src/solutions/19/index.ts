import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Workflows = Record<string, string[]>;

export type Rating = Record<string, number>;

export type Input = {
  workflows: Workflows;
  ratings: Rating[];
};

const preprocess = (text: string): Input => {
  const workflows: Workflows = text
    .split("\n\n")[0]
    .split("\n")
    .reduce((acc, curr) => {
      const key = curr.split("{")[0];
      const conditions = curr.substring(
        curr.indexOf("{") + 1,
        curr.indexOf("}")
      );
      return { ...acc, [key]: conditions.split(",") };
    }, {});
  const ratings = text
    .split("\n\n")[1]
    .split("\n")
    .map((rating) =>
      rating
        .slice(1, -1)
        .split(",")
        .reduce((acc, curr) => {
          const [key, value] = curr.split("=");
          return { ...acc, [key]: +value };
        }, {})
    );
  return { workflows, ratings };
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
