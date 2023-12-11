import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Input = {
  image: string[];
  expandedRows: number[];
  expandedCols: number[];
};

const transpose = (arr: string[]) => {
  const rows = arr.length;
  const cols = arr[0].length;
  let transposedArr = [];
  for (let i = 0; i < cols; i++) {
    let newRow = "";
    for (let j = 0; j < rows; j++) {
      newRow += arr[j][i];
    }
    transposedArr.push(newRow);
  }
  return transposedArr;
};

const preprocess = (text: string): Input => {
  const image = text.split("\n");
  const expandedRows: number[] = [];
  const expandedCols: number[] = [];
  for (let i = 0; i < image.length; i++) {
    if (image[i].match(/^\.+$/)) {
      expandedRows.push(i);
    }
  }
  const transposedImage = transpose(image);
  for (let i = 0; i < transposedImage.length; i++) {
    if (transposedImage[i].match(/^\.+$/)) {
      expandedCols.push(i);
    }
  }
  return { image, expandedRows, expandedCols };
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
