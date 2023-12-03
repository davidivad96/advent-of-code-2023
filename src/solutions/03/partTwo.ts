const regex = new RegExp(/\d+/, "g");

type Stars = { [key: string]: number };

const processStar = (stars: Stars, i: number, j: number, value: number) => {
  const key = `${i}-${j}`;
  if (stars[key]) {
    return stars[key] * value;
  } else {
    stars[key] = value;
    return 0;
  }
};

export const partTwo = (input: string[]) => {
  const stars: Stars = {};
  return input.reduce((acc, line, i, arr) => {
    const matches = [...line.matchAll(regex)];
    if (matches.length > 0) {
      matches.forEach((match) => {
        const { index } = match;
        const length = match[0].length;
        const value = Number(match[0]);
        for (let j = index - 1; j <= index + length; j++) {
          for (const offset of [-1, 0, 1]) {
            const row = i + offset;
            if (arr[row]?.[j] === "*") {
              acc += processStar(stars, row, j, value);
              break;
            }
          }
        }
      });
    }
    return acc;
  }, 0);
};
