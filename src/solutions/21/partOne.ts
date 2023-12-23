import { Input } from ".";
import { fillGrid } from "./utils";

export const partOne = ([grid, start]: Input) => fillGrid(grid, start, 64);
