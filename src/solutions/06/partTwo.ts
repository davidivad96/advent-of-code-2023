export const partTwo = ([time, distance]: [number, number]) => {
  let count = 0;
  for (let i = 0; i < time; i++) {
    if (i * (time - i) > distance) {
      count++;
    }
  }
  return count;
};
