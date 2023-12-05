import { Input } from ".";
import { applyMap } from "./utils";

export const partOne = (input: Input) => {
  const locations: number[] = [];
  for (const seed of input.seeds) {
    const soil = applyMap(seed, input.seedToSoil);
    const fertilizer = applyMap(soil, input.soilToFertilizer);
    const water = applyMap(fertilizer, input.fertilizerToWater);
    const light = applyMap(water, input.waterToLight);
    const temperature = applyMap(light, input.lightToTemperature);
    const humidity = applyMap(temperature, input.temperatureToHumidty);
    const location = applyMap(humidity, input.humidityToLocation);
    locations.push(location);
  }
  return Math.min(...locations);
};
