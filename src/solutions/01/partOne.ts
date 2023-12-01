import { reverseString } from "./utils";

const regex = new RegExp("\\d");

export const partOne = (input: string[]): number =>
  input.reduce((acc, line) => {
    const [firstDigit] = line.match(regex);
    const [lastDigit] = reverseString(line).match(regex);
    return acc + Number(firstDigit + lastDigit);
  }, 0);
