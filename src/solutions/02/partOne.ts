import { blueRegex, getCubeCounts, greenRegex, redRegex } from "./utils";

const MAX_CUBES = { red: 12, green: 13, blue: 14 };

const isInvalidConfiguration = (
  cubeCounts: number[],
  maxCubes: number
): boolean => cubeCounts.some((count) => count > maxCubes);

export const partOne = (input: string[]): number =>
  input.reduce((acc, line, index) => {
    const [redCubes, greenCubes, blueCubes] = [
      getCubeCounts(line, redRegex),
      getCubeCounts(line, greenRegex),
      getCubeCounts(line, blueRegex),
    ];
    return isInvalidConfiguration(redCubes, MAX_CUBES.red) ||
      isInvalidConfiguration(greenCubes, MAX_CUBES.green) ||
      isInvalidConfiguration(blueCubes, MAX_CUBES.blue)
      ? acc
      : acc + index + 1;
  }, 0);
