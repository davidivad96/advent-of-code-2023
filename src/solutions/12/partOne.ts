import { Input } from ".";
import { countArrangements } from "./utils";

export const partOne = (input: Input) =>
  input.reduce(
    (acc, [springs, groups]) =>
      acc + countArrangements(springs, groups, new Map<string, number>()),
    0
  );
