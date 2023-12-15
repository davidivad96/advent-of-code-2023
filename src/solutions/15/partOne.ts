import { calculateHash } from "./utils";

export const partOne = (input: string[]) =>
  input.reduce((acc, curr) => acc + calculateHash(curr), 0);
