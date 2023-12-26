export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export const reverseString = (str: string) => str.split("").reverse().join("");

export const transposeStringsArray = (arr: string[]): string[] => {
  const rows = arr.length;
  const cols = arr[0].length;
  const transposedArr = [];
  for (let i = 0; i < cols; i++) {
    let newRow = "";
    for (let j = 0; j < rows; j++) {
      newRow += arr[j][i];
    }
    transposedArr.push(newRow);
  }
  return transposedArr;
};

export const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj));

export const lcm = (arr: number[]) => {
  const gcd = (x: number, y: number) => (!y ? x : gcd(y, x % y));
  const _lcm = (x: number, y: number) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};

export const indexArrayToObject = (length: number) =>
  Array.from({ length }, (_, i) => i).reduce(
    (acc, curr) => ({ ...acc, [curr]: [] }),
    {}
  );
