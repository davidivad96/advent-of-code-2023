export const partOne = (input: number[][]) =>
  input.reduce((acc, [time, distance]) => {
    let count = 0;
    for (let i = 0; i < time; i++) {
      if (i * (time - i) > distance) {
        count++;
      }
    }
    return acc * count;
  }, 1);
