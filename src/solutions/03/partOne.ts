const regex = new RegExp(/\d+/, "g");

const isSpecialCharacter = (char?: string) => /[^\w\s.]/.test(char);

export const partOne = (input: string[]) =>
  input.reduce((acc, line, i, arr) => {
    const matches = [...line.matchAll(regex)];
    if (matches.length > 0) {
      matches.forEach((match) => {
        const { index } = match;
        const length = match[0].length;
        for (let j = index - 1; j <= index + length; j++) {
          if (
            isSpecialCharacter(arr[i - 1]?.[j]) ||
            isSpecialCharacter(arr[i][j]) ||
            isSpecialCharacter(arr[i + 1]?.[j])
          ) {
            acc += Number(match[0]);
            break;
          }
        }
      });
    }
    return acc;
  }, 0);
