export const redRegex = new RegExp("(\\d+) red", "g");
export const greenRegex = new RegExp("(\\d+) green", "g");
export const blueRegex = new RegExp("(\\d+) blue", "g");

export const getCubeCounts = (line: string, regex: RegExp): number[] =>
  [...line.matchAll(regex)].map(([, count]) => Number(count));
