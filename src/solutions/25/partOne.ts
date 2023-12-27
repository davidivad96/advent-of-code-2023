import "regenerator-runtime/runtime.js";
import { mincut } from "@graph-algorithm/minimum-cut";

export const partOne = (input: string[][]) => {
  const g: string[][] = [];
  for (const row of input) {
    const node1 = row[0];
    for (const node of row.slice(1)) {
      g.push([node1, node]);
      g.push([node, node1]);
    }
  }
  for (const node of mincut(g)) {
    const index = g.findIndex(
      ([from, to]) =>
        (from === node[0] && to === node[1]) ||
        (from === node[1] && to === node[0])
    );
    g.splice(index, 1);
  }
  const groups: string[][] = [];
  const components = new Set<string>(g.flat());
  const visited = new Set<string>();
  for (const component of components) {
    if (!visited.has(component)) {
      const group: string[] = [];
      const queue = [component];
      while (queue.length > 0) {
        const currentComponent = queue.shift();
        if (!visited.has(currentComponent)) {
          group.push(currentComponent);
          queue.push(
            ...g.filter((conn) => conn.includes(currentComponent)).flat()
          );
          visited.add(currentComponent);
        }
      }
      groups.push(group);
    }
  }
  return groups
    .map((group) => group.length)
    .reduce((mul, curr) => mul * curr, 1);
};
