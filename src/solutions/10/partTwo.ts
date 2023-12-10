import { Input } from ".";
import { Direction, getInitialMovement } from "./utils";

export const partTwo = ([grid, initialPosition]: Input) => {
  let [i, j] = initialPosition;
  const [N, M] = [grid.length, grid[0].length];
  const stepCountGrid: (number | null)[][] = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => null)
  );
  let nextMovement = getInitialMovement({
    [Direction.UP]: grid[i - 1]?.[j],
    [Direction.DOWN]: grid[i + 1]?.[j],
    [Direction.LEFT]: grid[i]?.[j - 1],
    [Direction.RIGHT]: grid[i]?.[j + 1],
  });
  let nSteps = 0;
  stepCountGrid[i][j] = nSteps;
  // Calculate loop
  do {
    if (nextMovement === Direction.UP) {
      [i, j] = [i - 1, j];
      nextMovement =
        grid[i][j] === "|"
          ? Direction.UP
          : grid[i][j] === "7"
          ? Direction.LEFT
          : Direction.RIGHT;
    } else if (nextMovement === Direction.DOWN) {
      [i, j] = [i + 1, j];
      nextMovement =
        grid[i][j] === "|"
          ? Direction.DOWN
          : grid[i][j] === "L"
          ? Direction.RIGHT
          : Direction.LEFT;
    } else if (nextMovement === Direction.LEFT) {
      [i, j] = [i, j - 1];
      nextMovement =
        grid[i][j] === "-"
          ? Direction.LEFT
          : grid[i][j] === "L"
          ? Direction.UP
          : Direction.DOWN;
    } else {
      [i, j] = [i, j + 1];
      nextMovement =
        grid[i][j] === "-"
          ? Direction.RIGHT
          : grid[i][j] === "J"
          ? Direction.UP
          : Direction.DOWN;
    }
    nSteps++;
    stepCountGrid[i][j] = nSteps;
  } while (i !== initialPosition[0] || j !== initialPosition[1]);
  // Count tiles enclosed by the loop
  let counter = 0;
  let nTiles = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (stepCountGrid[i][j] === null) {
        if (counter !== 0) {
          nTiles++;
        }
      } else if (
        stepCountGrid[i + 1]?.[j] !== null &&
        stepCountGrid[i + 1]?.[j] !== undefined
      ) {
        counter +=
          (stepCountGrid[i][j] % nSteps) -
            (stepCountGrid[i + 1][j] % nSteps) ===
          1
            ? 1
            : (stepCountGrid[i][j] % nSteps) -
                (stepCountGrid[i + 1][j] % nSteps) ===
              -1
            ? -1
            : 0;
      }
    }
  }
  return nTiles;
};
