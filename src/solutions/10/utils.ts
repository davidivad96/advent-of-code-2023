export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export const getInitialMovement = (pipes: {
  [key in Direction]: string;
}): Direction =>
  ["|", "7", "F"].includes(pipes.UP)
    ? Direction.UP
    : ["|", "L", "J"].includes(pipes.DOWN)
    ? Direction.DOWN
    : ["-", "L", "F"].includes(pipes.LEFT)
    ? Direction.LEFT
    : Direction.RIGHT;
