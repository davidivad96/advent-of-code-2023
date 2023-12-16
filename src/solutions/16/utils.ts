export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

type Node = { position: [number, number]; direction: Direction };

const insertNode = (node: Node, nodes: Node[], visitedNodes: string[]) => {
  if (visitedNodes.indexOf(JSON.stringify(node)) === -1) {
    nodes.push(node);
  }
};

export const calculateEnergy = (
  base: string[][],
  start: [number, number],
  direction: Direction
) => {
  const [nrows, ncols] = [base.length, base[0].length];
  const energized = Array.from({ length: nrows }, () =>
    Array.from({ length: ncols }, () => ".")
  );
  const nodes: Node[] = [{ position: start, direction }];
  const visitedNodes: string[] = [];
  while (nodes.length > 0) {
    const node = nodes.shift();
    visitedNodes.push(JSON.stringify(node));
    const {
      position: [row, column],
      direction,
    } = node;
    if (direction === Direction.UP) {
      const j = column;
      for (let i = row; i >= 0; i--) {
        energized[i][j] = "#";
        if (base[i][j] === "-") {
          insertNode(
            { position: [i, j - 1], direction: Direction.LEFT },
            nodes,
            visitedNodes
          );
          insertNode(
            { position: [i, j + 1], direction: Direction.RIGHT },
            nodes,
            visitedNodes
          );
          break;
        } else if (base[i][j] === "/") {
          insertNode(
            { position: [i, j + 1], direction: Direction.RIGHT },
            nodes,
            visitedNodes
          );
          break;
        } else if (base[i][j] === "\\") {
          insertNode(
            { position: [i, j - 1], direction: Direction.LEFT },
            nodes,
            visitedNodes
          );
          break;
        }
      }
    } else if (direction === Direction.DOWN) {
      const j = column;
      for (let i = row; i < nrows; i++) {
        energized[i][j] = "#";
        if (base[i][j] === "-") {
          insertNode(
            { position: [i, j - 1], direction: Direction.LEFT },
            nodes,
            visitedNodes
          );
          insertNode(
            { position: [i, j + 1], direction: Direction.RIGHT },
            nodes,
            visitedNodes
          );
          break;
        } else if (base[i][j] === "/") {
          insertNode(
            { position: [i, j - 1], direction: Direction.LEFT },
            nodes,
            visitedNodes
          );
          break;
        } else if (base[i][j] === "\\") {
          insertNode(
            { position: [i, j + 1], direction: Direction.RIGHT },
            nodes,
            visitedNodes
          );
          break;
        }
      }
    } else if (direction === Direction.LEFT) {
      const i = row;
      for (let j = column; j >= 0; j--) {
        energized[i][j] = "#";
        if (base[i][j] === "|") {
          insertNode(
            { position: [i - 1, j], direction: Direction.UP },
            nodes,
            visitedNodes
          );
          insertNode(
            { position: [i + 1, j], direction: Direction.DOWN },
            nodes,
            visitedNodes
          );
          break;
        } else if (base[i][j] === "/") {
          insertNode(
            { position: [i + 1, j], direction: Direction.DOWN },
            nodes,
            visitedNodes
          );
          break;
        } else if (base[i][j] === "\\") {
          insertNode(
            { position: [i - 1, j], direction: Direction.UP },
            nodes,
            visitedNodes
          );
          break;
        }
      }
    } else if (direction === Direction.RIGHT) {
      const i = row;
      for (let j = column; j < ncols; j++) {
        energized[i][j] = "#";
        if (base[i][j] === "|") {
          insertNode(
            { position: [i - 1, j], direction: Direction.UP },
            nodes,
            visitedNodes
          );
          insertNode(
            { position: [i + 1, j], direction: Direction.DOWN },
            nodes,
            visitedNodes
          );
          break;
        } else if (base[i][j] === "/") {
          insertNode(
            { position: [i - 1, j], direction: Direction.UP },
            nodes,
            visitedNodes
          );
          break;
        } else if (base[i][j] === "\\") {
          insertNode(
            { position: [i + 1, j], direction: Direction.DOWN },
            nodes,
            visitedNodes
          );
          break;
        }
      }
    }
  }
  return energized
    .flat()
    .reduce((acc, curr) => acc + (curr === "#" ? 1 : 0), 0);
};
