import { blueRegex, getCubeCounts, greenRegex, redRegex } from "./utils";

export const partTwo = (input: string[]) =>
  input.reduce((acc, line) => {
    const [maxRedCubes, maxGreenCubes, maxBlueCubes] = [
      Math.max(...getCubeCounts(line, redRegex)),
      Math.max(...getCubeCounts(line, greenRegex)),
      Math.max(...getCubeCounts(line, blueRegex)),
    ];
    return acc + maxRedCubes * maxGreenCubes * maxBlueCubes;
  }, 0);
