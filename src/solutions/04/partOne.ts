export const partOne = (input: { winning: number[]; having: number[] }[]) =>
  input.reduce(
    (totalSum, card) =>
      totalSum +
      card.winning.reduce(
        (acc, num) =>
          card.having.includes(num) ? (acc === 0 ? 1 : acc * 2) : acc,
        0
      ),
    0
  );
