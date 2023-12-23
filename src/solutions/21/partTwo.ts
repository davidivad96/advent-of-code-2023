import { Input } from ".";
import { fillGrid } from "./utils";

export const partTwo = ([grid, start]: Input) => {
  const size = grid.length;
  const steps = 26501365;

  const gridWidth = Math.floor(steps / size - 1);

  const odd = (Math.floor(gridWidth / 2) * 2 + 1) ** 2;
  const even = (Math.floor((gridWidth + 1) / 2) * 2) ** 2;

  const oddPoints = fillGrid(grid, start, size * 2 + 1);
  const evenPoints = fillGrid(grid, start, size * 2);

  const cornerTop = fillGrid(grid, [size - 1, start[1]], size - 1);
  const cornerRight = fillGrid(grid, [start[0], 0], size - 1);
  const cornerBottom = fillGrid(grid, [0, start[1]], size - 1);
  const cornerLeft = fillGrid(grid, [start[0], size - 1], size - 1);

  const smallTopRight = fillGrid(grid, [size - 1, 0], Math.floor(size / 2) - 1);
  const smallTopLeft = fillGrid(
    grid,
    [size - 1, size - 1],
    Math.floor(size / 2) - 1
  );
  const smallBottomRight = fillGrid(grid, [0, 0], Math.floor(size / 2) - 1);
  const smallBottomLeft = fillGrid(
    grid,
    [0, size - 1],
    Math.floor(size / 2) - 1
  );

  const largeTopRight = fillGrid(
    grid,
    [size - 1, 0],
    Math.floor((size * 3) / 2) - 1
  );
  const largeTopLeft = fillGrid(
    grid,
    [size - 1, size - 1],
    Math.floor((size * 3) / 2) - 1
  );
  const largeBottomRight = fillGrid(
    grid,
    [0, 0],
    Math.floor((size * 3) / 2) - 1
  );
  const largeBottomLeft = fillGrid(
    grid,
    [0, size - 1],
    Math.floor((size * 3) / 2) - 1
  );

  return (
    odd * oddPoints +
    even * evenPoints +
    cornerTop +
    cornerRight +
    cornerBottom +
    cornerLeft +
    (gridWidth + 1) *
      (smallTopRight + smallTopLeft + smallBottomRight + smallBottomLeft) +
    gridWidth *
      (largeTopRight + largeTopLeft + largeBottomRight + largeBottomLeft)
  );
};
