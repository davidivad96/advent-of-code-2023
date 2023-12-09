export const partTwo = (input: number[][]) =>
  input.reduce((sum, sequence) => {
    const sequences = [[...sequence]];
    while (!sequences[sequences.length - 1].every((value) => value === 0)) {
      const currentSequence = sequences[sequences.length - 1];
      const newSequence = currentSequence.reduce(
        (acc, curr, i, arr) => (i === 0 ? acc : [...acc, curr - arr[i - 1]]),
        []
      );
      sequences.push(newSequence);
    }
    const newValue = [...sequences]
      .reverse()
      .reduce((acc, curr, i) => (i === 0 ? acc : curr[0] - acc), 0);
    return sum + newValue;
  }, 0);
