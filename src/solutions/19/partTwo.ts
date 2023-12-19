import { Input, Workflows } from ".";
import { deepClone } from "../../utils";

type Range = { start: number; end: number };

const countValidCombinations = (
  workflows: Workflows,
  target: string,
  ranges: { x: Range; m: Range; a: Range; s: Range }
) => {
  if (target === "A") {
    return Object.values(ranges).reduce(
      (acc, { start, end }) => acc * (end - start + 1),
      1
    );
  }
  if (target === "R") {
    return 0;
  }
  const currentWorkflow = workflows[target];
  let result = 0;
  for (const condition of currentWorkflow) {
    const operation = condition.includes("<")
      ? "<"
      : condition.includes(">")
      ? ">"
      : null;
    if (operation) {
      const [check, nextTarget] = condition.split(":");
      const [key, value] = check.split(operation) as [
        keyof typeof ranges,
        string
      ];
      const newRanges = deepClone(ranges);
      if (operation === "<") {
        newRanges[key].end = +value - 1;
        result += countValidCombinations(workflows, nextTarget, newRanges);
        ranges[key].start = +value;
      } else {
        newRanges[key].start = +value + 1;
        result += countValidCombinations(workflows, nextTarget, newRanges);
        ranges[key].end = +value;
      }
    } else {
      result += countValidCombinations(workflows, condition, ranges);
    }
  }
  return result;
};

export const partTwo = ({ workflows }: Input) => {
  const initialRange: Range = { start: 1, end: 4000 };
  return countValidCombinations(workflows, "in", {
    x: { ...initialRange },
    m: { ...initialRange },
    a: { ...initialRange },
    s: { ...initialRange },
  });
};
