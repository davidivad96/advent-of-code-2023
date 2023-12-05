export const applyMap = (value: number, maps: number[][]) => {
  for (const map of maps) {
    if (value >= map[1] && value < map[1] + map[2]) {
      return value + (map[0] - map[1]);
    }
  }
  return value;
};
