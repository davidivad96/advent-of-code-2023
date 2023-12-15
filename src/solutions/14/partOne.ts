import { moveUp } from "./utils";

export const partOne = (input: string[][]) => {
  moveUp(input);
  return input.reduce(
    (acc, curr, index) =>
      acc +
      (input.length - index) * [...curr].filter((val) => val === "O").length,
    0
  );
};
