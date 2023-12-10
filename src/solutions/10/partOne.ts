import { Input } from ".";
import { Direction, getInitialMovement } from "./utils";

export const partOne = ([grid, initialPosition]: Input) => {
  let [i, j] = initialPosition;
  let nextMovement = getInitialMovement({
    [Direction.UP]: grid[i - 1]?.[j],
    [Direction.DOWN]: grid[i + 1]?.[j],
    [Direction.LEFT]: grid[i]?.[j - 1],
    [Direction.RIGHT]: grid[i]?.[j + 1],
  });
  let nSteps = 0;
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
  } while (i !== initialPosition[0] || j !== initialPosition[1]);
  return nSteps / 2;
};
