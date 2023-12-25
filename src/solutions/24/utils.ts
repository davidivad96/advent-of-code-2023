export const calculateIntersectionPoint = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
) => {
  const m1 = (y2 - y1) / (x2 - x1);
  const b1 = y1 - m1 * x1;
  const m2 = (y4 - y3) / (x4 - x3);
  const b2 = y3 - m2 * x3;
  if (m1 === m2) {
    return {};
  }
  const xIntersect = (b2 - b1) / (m1 - m2);
  const yIntersect = m1 * xIntersect + b1;
  return { x: xIntersect, y: yIntersect };
};

export const crossedInPast = (x: number, p: number, v: number) =>
  v < 0 ? x > p : x < p;
