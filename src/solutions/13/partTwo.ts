import { transposeStringsArray, reverseString } from "../../utils";

export const partTwo = (input: string[][]) =>
  input.reduce((acc, patterns) => {
    const nrows = patterns.length;
    const ncols = patterns[0].length;
    for (let i = 0; i < nrows; i++) {
      for (let j = 0; j < ncols; j++) {
        const fixedPatterns = [...patterns];
        fixedPatterns[i] =
          fixedPatterns[i].slice(0, j) +
          (fixedPatterns[i][j] === "." ? "#" : ".") +
          fixedPatterns[i].slice(j + 1);
        for (let x = 1; x < ncols; x++) {
          const length = x <= Math.floor(ncols / 2) ? x : ncols - x;
          if (
            !Array.from({ length: nrows }, (_, i) => i).every(
              (y) =>
                patterns[y].slice(Math.max(0, x - length), x) ===
                reverseString(patterns[y].slice(x, x + length))
            ) &&
            Array.from({ length: nrows }, (_, i) => i).every(
              (y) =>
                fixedPatterns[y].slice(Math.max(0, x - length), x) ===
                reverseString(fixedPatterns[y].slice(x, x + length))
            )
          ) {
            return acc + x;
          }
        }
        const transposed = transposeStringsArray(patterns);
        const transposedFixed = transposeStringsArray(fixedPatterns);
        for (let x = 1; x < nrows; x++) {
          const length = x <= Math.floor(nrows / 2) ? x : nrows - x;
          if (
            !Array.from({ length: ncols }, (_, i) => i).every(
              (y) =>
                transposed[y].slice(Math.max(0, x - length), x) ===
                reverseString(transposed[y].slice(x, x + length))
            ) &&
            Array.from({ length: ncols }, (_, i) => i).every(
              (y) =>
                transposedFixed[y].slice(Math.max(0, x - length), x) ===
                reverseString(transposedFixed[y].slice(x, x + length))
            )
          ) {
            return acc + x * 100;
          }
        }
      }
    }
  }, 0);
