import { Direction } from "../../utils";

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
