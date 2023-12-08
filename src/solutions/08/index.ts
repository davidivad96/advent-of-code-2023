import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Input = [
  string,
  {
    [node: string]: {
      L: string;
      R: string;
    };
  }
];

const preprocess = (text: string): Input => {
  const [instructions, nodes] = text.split("\n\n");
  return [
    instructions,
    nodes.split("\n").reduce((acc, curr) => {
      const [_, node, left, right] = curr.match(
        /([A-Z0-9]{3}) = \(([A-Z0-9]{3}), ([A-Z0-9]{3})\)/
      );
      return { ...acc, [node]: { L: left, R: right } };
    }, {}),
  ];
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
