export const fillGrid = (
  grid: string[][],
  start: [number, number],
  nSteps: number
) => {
  let positions = new Set<string>([JSON.stringify([start[0], start[1]])]);
  for (let k = 0; k < nSteps; k++) {
    const newPositions = new Set<string>();
    for (const position of positions) {
      const [i, j] = JSON.parse(position);
      if ([".", "S"].includes(grid[i - 1]?.[j])) {
        newPositions.add(JSON.stringify([i - 1, j]));
      }
      if ([".", "S"].includes(grid[i][j - 1])) {
        newPositions.add(JSON.stringify([i, j - 1]));
      }
      if ([".", "S"].includes(grid[i][j + 1])) {
        newPositions.add(JSON.stringify([i, j + 1]));
      }
      if ([".", "S"].includes(grid[i + 1]?.[j])) {
        newPositions.add(JSON.stringify([i + 1, j]));
      }
    }
    positions = newPositions;
  }
  return positions.size;
};
