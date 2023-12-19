import { Input, Rating, Workflows } from ".";

const calculateNextWorkflow = (conditions: string[], rating: Rating) => {
  for (const condition of conditions) {
    const operation = condition.includes("<")
      ? "<"
      : condition.includes(">")
      ? ">"
      : "";
    if (operation) {
      const [check, result] = condition.split(":");
      const [key, value] = check.split(operation);
      if (
        (operation === "<" && rating[key] < +value) ||
        (operation === ">" && rating[key] > +value)
      ) {
        return result;
      }
    }
  }
  return conditions.at(-1);
};

const isAccepted = (workflows: Workflows, rating: Rating) => {
  let currentWorkflow = "in";
  while (!["A", "R"].includes(currentWorkflow)) {
    currentWorkflow = calculateNextWorkflow(workflows[currentWorkflow], rating);
  }
  return currentWorkflow === "A";
};

export const partOne = ({ workflows, ratings }: Input) =>
  ratings.reduce(
    (sum, rating) =>
      isAccepted(workflows, rating)
        ? sum + Object.values(rating).reduce((acc, curr) => acc + curr, 0)
        : sum,
    0
  );
