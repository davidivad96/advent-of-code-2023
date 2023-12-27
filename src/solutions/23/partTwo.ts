const getNeighbours = (input: string[][], [i, j]: [number, number]) => {
  let result: [number, number][] = [
    [i - 1, j],
    [i, j + 1],
    [i + 1, j],
    [i, j - 1],
  ];
  return result.filter((coord) =>
    [".", "^", ">", "v", "<"].includes(input[coord[0]]?.[coord[1]])
  );
};

export const partTwo = (input: string[][]) => {
  let maxSteps = 0;
  const start: [number, number] = [0, input[0].indexOf(".")];
  const end: [number, number] = [input.length - 1, input.at(-1).indexOf(".")];
  const findLongestPath = (
    current: [number, number],
    path: [number, number][],
    visited: Set<string>
  ) => {
    if (current[0] === end[0] && current[1] === end[1]) {
      maxSteps = Math.max(maxSteps, path.length);
      return;
    }
    visited.add(JSON.stringify(current));
    const neighbours = getNeighbours(input, current);
    for (const neighbour of neighbours) {
      if (!visited.has(JSON.stringify(neighbour))) {
        path.push(neighbour);
        findLongestPath(neighbour, path, visited);
        path.pop();
      }
    }
    visited.delete(JSON.stringify(current));
  };
  findLongestPath(start, [], new Set<string>());
  return maxSteps;
};
