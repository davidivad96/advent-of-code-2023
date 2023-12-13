import { Input } from ".";
import { countArrangements } from "./utils";

export const partTwo = (input: Input) =>
  input.reduce(
    (acc, [springs, groups]) =>
      acc +
      countArrangements(
        `${springs}?`.repeat(5).slice(0, -1),
        Array.from({ length: 5 }, () => groups).flat(),
        new Map<string, number>()
      ),
    0
  );
