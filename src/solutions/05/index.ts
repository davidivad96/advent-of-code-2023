import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Input = {
  seeds: number[];
  seedToSoil: number[][];
  soilToFertilizer: number[][];
  fertilizerToWater: number[][];
  waterToLight: number[][];
  lightToTemperature: number[][];
  temperatureToHumidty: number[][];
  humidityToLocation: number[][];
};

const get = (text: string, from: RegExp, to: RegExp) =>
  text.slice(text.match(from).index, text.match(to).index).split("\n");

const transform = (arr: string[]) =>
  arr.slice(1, arr.length - 2).map((line) => line.split(" ").map(Number));

const preprocess = (text: string): Input => {
  const seeds = text
    .match(/seeds: (.*)/)[1]
    .split(" ")
    .map(Number);
  const seedToSoil = get(text, /seed-to-soil map:/, /soil-to-fertilizer map:/);
  const soilToFertilizer = get(
    text,
    /soil-to-fertilizer map:/,
    /fertilizer-to-water map:/
  );
  const fertilizerToWater = get(
    text,
    /fertilizer-to-water map:/,
    /water-to-light map:/
  );
  const waterToLight = get(
    text,
    /water-to-light map:/,
    /light-to-temperature map:/
  );
  const lightToTemperature = get(
    text,
    /light-to-temperature map:/,
    /temperature-to-humidity map:/
  );
  const temperatureToHumidty = get(
    text,
    /temperature-to-humidity map:/,
    /humidity-to-location map:/
  );
  const humidityToLocation = text
    .slice(text.match(/humidity-to-location/).index)
    .split("\n");
  return {
    seeds,
    seedToSoil: transform(seedToSoil),
    soilToFertilizer: transform(soilToFertilizer),
    fertilizerToWater: transform(fertilizerToWater),
    waterToLight: transform(waterToLight),
    lightToTemperature: transform(lightToTemperature),
    temperatureToHumidty: transform(temperatureToHumidty),
    humidityToLocation: humidityToLocation
      .slice(1)
      .map((line) => line.split(" ").map(Number)),
  };
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
