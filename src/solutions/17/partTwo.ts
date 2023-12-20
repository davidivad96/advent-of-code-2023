import { Direction } from "../../utils";

type Node = {
  heatLoss: number;
  indexes: [number, number];
  lastDirection: Direction | null;
  straightLineCount: number;
};

export const partTwo = (input: number[][]) => {
  const nrows = input.length;
  const ncols = input[0].length;
  const nodes: Node[] = [
    { heatLoss: 0, indexes: [0, 0], lastDirection: null, straightLineCount: 0 },
  ];
  const seen = new Set<string>();
  while (nodes.length > 0) {
    const {
      heatLoss,
      indexes: [i, j],
      lastDirection,
      straightLineCount,
    } = nodes.shift();
    if (i === nrows - 1 && j === ncols - 1 && straightLineCount >= 4) {
      return heatLoss;
    }
    if (!seen.has(JSON.stringify([i, j, lastDirection, straightLineCount]))) {
      if (i > 0) {
        const newNode: Node = {
          heatLoss: heatLoss + input[i - 1][j],
          indexes: [i - 1, j],
          lastDirection: Direction.UP,
          straightLineCount: straightLineCount + 1,
        };
        if (lastDirection === Direction.UP) {
          if (straightLineCount < 10) {
            nodes.push(newNode);
          }
        } else if (
          lastDirection === null ||
          (lastDirection !== Direction.DOWN && straightLineCount >= 4)
        ) {
          nodes.push({ ...newNode, straightLineCount: 1 });
        }
      }
      if (i < nrows - 1) {
        const newNode: Node = {
          heatLoss: heatLoss + input[i + 1][j],
          indexes: [i + 1, j],
          lastDirection: Direction.DOWN,
          straightLineCount: straightLineCount + 1,
        };
        if (lastDirection === Direction.DOWN) {
          if (straightLineCount < 10) {
            nodes.push(newNode);
          }
        } else if (
          lastDirection === null ||
          (lastDirection !== Direction.UP && straightLineCount >= 4)
        ) {
          nodes.push({ ...newNode, straightLineCount: 1 });
        }
      }
      if (j > 0) {
        const newNode: Node = {
          heatLoss: heatLoss + input[i][j - 1],
          indexes: [i, j - 1],
          lastDirection: Direction.LEFT,
          straightLineCount: straightLineCount + 1,
        };
        if (lastDirection === Direction.LEFT) {
          if (straightLineCount < 10) {
            nodes.push(newNode);
          }
        } else if (
          lastDirection !== Direction.RIGHT &&
          straightLineCount >= 4
        ) {
          nodes.push({ ...newNode, straightLineCount: 1 });
        }
      }
      if (j < ncols - 1) {
        const newNode: Node = {
          heatLoss: heatLoss + input[i][j + 1],
          indexes: [i, j + 1],
          lastDirection: Direction.RIGHT,
          straightLineCount: straightLineCount + 1,
        };
        if (lastDirection === Direction.RIGHT) {
          if (straightLineCount < 10) {
            nodes.push(newNode);
          }
        } else if (
          lastDirection === null ||
          (lastDirection !== Direction.LEFT && straightLineCount >= 4)
        ) {
          nodes.push({ ...newNode, straightLineCount: 1 });
        }
      }
      seen.add(JSON.stringify([i, j, lastDirection, straightLineCount]));
      nodes.sort((a, b) => a.heatLoss - b.heatLoss);
    }
  }
  return 0;
};
