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
