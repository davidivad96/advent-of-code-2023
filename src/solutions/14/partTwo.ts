import { moveDown, moveLeft, moveRight, moveUp } from "./utils";

export const partTwo = (input: string[][]) => {
  const seen: string[] = [];
  const NCYCLES = 1e9;
  for (let i = 0; i < NCYCLES; i++) {
    if (seen.indexOf(JSON.stringify(input)) !== -1) {
      seen.push(JSON.stringify(input));
      break;
    } else {
      seen.push(JSON.stringify(input));
      moveUp(input);
      moveLeft(input);
      moveDown(input);
      moveRight(input);
    }
  }
  const startLoopIndex = seen.indexOf(JSON.stringify(input));
  const endLoopIndex = seen.lastIndexOf(JSON.stringify(input));
  const endInput: string[][] = JSON.parse(
    seen[
      startLoopIndex +
        ((NCYCLES - startLoopIndex) % (endLoopIndex - startLoopIndex))
    ]
  );
  return endInput.reduce(
    (acc, curr, index) =>
      acc +
      (endInput.length - index) * [...curr].filter((val) => val === "O").length,
    0
  );
};
