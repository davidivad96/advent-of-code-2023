import {
  cardsScores,
  getBestHand,
  getHandType,
  handTypesScores,
} from "./utils";

export const partOne = (input: [string, number][]) => {
  const sortedHands = input.sort((first, second) => {
    const firstHandType = getHandType(first[0], false);
    const secondHandType = getHandType(second[0], false);
    if (firstHandType === secondHandType) {
      const bestHand = getBestHand(first[0], second[0], cardsScores);
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
