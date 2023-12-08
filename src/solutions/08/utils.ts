export function* instructionsGenerator(instructions: string) {
  let i = 0;
  while (true) {
    yield instructions.at(i % instructions.length);
    i++;
  }
}

export const lcm = (arr: number[]) => {
  const gcd = (x: number, y: number) => (!y ? x : gcd(y, x % y));
  const _lcm = (x: number, y: number) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};
