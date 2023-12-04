export const partTwo = (input: { winning: number[]; having: number[] }[]) => {
  const copies: { [key: number]: number } = Object.fromEntries(
    Array.from({ length: input.length }, (_, i) => [i, 1])
  );
  for (const [index, card] of input.entries()) {
    const winningCount = card.winning.reduce(
      (acc, num) => (card.having.includes(num) ? acc + 1 : acc),
      0
    );
    for (let i = index + 1; i < index + 1 + winningCount; i++) {
      copies[i] = (copies[i] || 0) + copies[index];
    }
  }
  return Object.values(copies).reduce((a, b) => a + b, 0);
};
