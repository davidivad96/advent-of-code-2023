enum HandType {
  FIVE_OF_A_KIND = "FIVE_OF_A_KIND",
  FOUR_OF_A_KIND = "FOUR_OF_A_KIND",
  FULL_HOUSE = "FULL_HOUSE",
  THREE_OF_A_KIND = "THREE_OF_A_KIND",
  TWO_PAIR = "TWO_PAIR",
  ONE_PAIR = "ONE_PAIR",
  HIGH_CARD = "HIGH_CARD",
}

type CardsScores = { [key: string | number]: number };

const handTypesScores: { [key in HandType]: number } = {
  [HandType.FIVE_OF_A_KIND]: 7,
  [HandType.FOUR_OF_A_KIND]: 6,
  [HandType.FULL_HOUSE]: 5,
  [HandType.THREE_OF_A_KIND]: 4,
  [HandType.TWO_PAIR]: 3,
  [HandType.ONE_PAIR]: 2,
  [HandType.HIGH_CARD]: 1,
};

const cardsScores: CardsScores = {
  A: 15,
  K: 13,
  Q: 12,
  J: 11,
  T: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
};

const cardsWithJokerScores: CardsScores = {
  A: 15,
  K: 13,
  Q: 12,
  T: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
  J: 1,
};

const getHandType = (hand: string, withJoker: boolean): HandType => {
  const occurrences: { [key: string | number]: number } = {};
  for (const card of hand) {
    occurrences[card] = (occurrences[card] || 0) + 1;
  }
  let occurrencesCount: number[] = [];
  if (withJoker) {
    occurrencesCount = Object.values(
      Object.fromEntries(
        Object.entries(occurrences).filter(([key]) => key !== "J")
      )
    );
    // JJJJJ
    if (occurrencesCount.length === 0) {
      return HandType.FIVE_OF_A_KIND;
    }
    const maxIndex = occurrencesCount.indexOf(Math.max(...occurrencesCount));
    occurrencesCount[maxIndex] += occurrences["J"] || 0;
  } else {
    occurrencesCount = Object.values(occurrences);
  }
  if (occurrencesCount.includes(5)) {
    return HandType.FIVE_OF_A_KIND;
  }
  if (occurrencesCount.includes(4)) {
    return HandType.FOUR_OF_A_KIND;
  }
  if (occurrencesCount.includes(3)) {
    if (occurrencesCount.includes(2)) {
      return HandType.FULL_HOUSE;
    }
    return HandType.THREE_OF_A_KIND;
  }
  if (occurrencesCount.includes(2)) {
    if (occurrencesCount.filter((x) => x === 2).length === 2) {
      return HandType.TWO_PAIR;
    }
    return HandType.ONE_PAIR;
  }
  return HandType.HIGH_CARD;
};

const getBestHand = (
  firstHand: string,
  secondHand: string,
  scores: CardsScores
): string => {
  for (let i = 0; i < 5; i++) {
    if (scores[firstHand.at(i)] > scores[secondHand.at(i)]) {
      return firstHand;
    }
    if (scores[firstHand.at(i)] < scores[secondHand.at(i)]) {
      return secondHand;
    }
  }
  return firstHand;
};

export {
  getHandType,
  getBestHand,
  handTypesScores,
  cardsScores,
  cardsWithJokerScores,
};
