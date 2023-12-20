import { Direction } from "../../utils";

type Node = {
  heatLoss: number;
  indexes: [number, number];
  lastDirection: Direction | null;
  straightLineCount: number;
};

export const partOne = (input: number[][]) => {
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
    if (i === nrows - 1 && j === ncols - 1) {
      return heatLoss;
    }
    if (!seen.has(JSON.stringify([i, j, lastDirection, straightLineCount]))) {
      if (
        i > 0 &&
        !(lastDirection === Direction.UP && straightLineCount > 2) &&
        lastDirection !== Direction.DOWN
      ) {
        nodes.push({
          heatLoss: heatLoss + input[i - 1][j],
          indexes: [i - 1, j],
          lastDirection: Direction.UP,
          straightLineCount:
            lastDirection === Direction.UP ? straightLineCount + 1 : 1,
        });
      }
      if (
        i < nrows - 1 &&
        !(lastDirection === Direction.DOWN && straightLineCount > 2) &&
        lastDirection !== Direction.UP
      ) {
        nodes.push({
          heatLoss: heatLoss + input[i + 1][j],
          indexes: [i + 1, j],
          lastDirection: Direction.DOWN,
          straightLineCount:
            lastDirection === Direction.DOWN ? straightLineCount + 1 : 1,
        });
      }
      if (
        j > 0 &&
        !(lastDirection === Direction.LEFT && straightLineCount > 2) &&
        lastDirection !== Direction.RIGHT
      ) {
        nodes.push({
          heatLoss: heatLoss + input[i][j - 1],
          indexes: [i, j - 1],
          lastDirection: Direction.LEFT,
          straightLineCount:
            lastDirection === Direction.LEFT ? straightLineCount + 1 : 1,
        });
      }
      if (
        j < ncols - 1 &&
        !(lastDirection === Direction.RIGHT && straightLineCount > 2) &&
        lastDirection !== Direction.LEFT
      ) {
        nodes.push({
          heatLoss: heatLoss + input[i][j + 1],
          indexes: [i, j + 1],
          lastDirection: Direction.RIGHT,
          straightLineCount:
            lastDirection === Direction.RIGHT ? straightLineCount + 1 : 1,
        });
      }
      seen.add(JSON.stringify([i, j, lastDirection, straightLineCount]));
      nodes.sort((a, b) => a.heatLoss - b.heatLoss);
    }
  }
  return 0;
};
