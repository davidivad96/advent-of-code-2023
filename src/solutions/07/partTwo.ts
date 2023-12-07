import {
  cardsWithJokerScores,
  getBestHand,
  getHandType,
  handTypesScores,
} from "./utils";

export const partTwo = (input: [string, number][]) => {
  const sortedHands = input.sort((first, second) => {
    const firstHandType = getHandType(first[0], true);
    const secondHandType = getHandType(second[0], true);
    if (firstHandType === secondHandType) {
      const bestHand = getBestHand(first[0], second[0], cardsWithJokerScores);
      return bestHand === first[0] ? 1 : -1;
    }
    return handTypesScores[firstHandType] > handTypesScores[secondHandType]
      ? 1
      : -1;
  });
  return sortedHands.reduce(
    (acc, [_, bid], index) => acc + bid * (index + 1),
    0
  );
};
