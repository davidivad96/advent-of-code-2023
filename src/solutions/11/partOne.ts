import { Input } from ".";
import { manhattanDistance } from "./utils";

export const partOne = ({ image, expandedRows, expandedCols }: Input) => {
  const distances: number[] = [];
  const galaxiesCoordinates: Set<[number, number]> = new Set();
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === "#") {
        const currentGalaxyCoordinates: [number, number] = [
          i + expandedRows.filter((rowIndex) => rowIndex < i).length,
          j + expandedCols.filter((colIndex) => colIndex < j).length,
        ];
        for (const galaxyCoordinates of galaxiesCoordinates) {
          distances.push(
            manhattanDistance(galaxyCoordinates, currentGalaxyCoordinates)
          );
        }
        galaxiesCoordinates.add(currentGalaxyCoordinates);
      }
    }
  }
  return distances.reduce((acc, curr) => acc + curr, 0);
};
