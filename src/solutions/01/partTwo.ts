import { numWordToStr, reverseString } from "./utils";

const regex = new RegExp(
  "\\d|one|eno|two|owt|three|eerht|four|ruof|five|evif|six|xis|seven|neves|eight|thgie|nine|enin",
  "g"
);

export const partTwo = (input: string[]): number =>
  input.reduce((acc, line) => {
    const [firstDigit] = line.match(regex);
    const [lastDigit] = reverseString(line).match(regex);
    return acc + Number(numWordToStr[firstDigit] + numWordToStr[lastDigit]);
  }, 0);
