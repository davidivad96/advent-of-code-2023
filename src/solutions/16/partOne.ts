import { Direction, calculateEnergy } from "./utils";

export const partOne = (input: string[][]) =>
  calculateEnergy(input, [0, 0], Direction.RIGHT);
