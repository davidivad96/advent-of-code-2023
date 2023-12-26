export function* instructionsGenerator(instructions: string) {
  let i = 0;
  while (true) {
    yield instructions.at(i % instructions.length);
    i++;
  }
}
