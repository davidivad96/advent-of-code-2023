import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { transposeStringsArray } from "../../utils";

export type Input = {
  image: string[];
  expandedRows: number[];
  expandedCols: number[];
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
  const transposedImage = transposeStringsArray(image);
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
