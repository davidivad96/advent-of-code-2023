import { Input } from ".";
import { applyMap } from "./utils";

function* createSeedsGenerator(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    for (let j = 0; j < arr[i + 1]; j++) {
      yield arr[i] + j;
    }
  }
}

export const partTwo = (input: Input) => {
  const seeds = createSeedsGenerator(input.seeds);
  let min = Number.MAX_SAFE_INTEGER;
  for (const seed of seeds) {
    const soil = applyMap(seed, input.seedToSoil);
    const fertilizer = applyMap(soil, input.soilToFertilizer);
    const water = applyMap(fertilizer, input.fertilizerToWater);
    const light = applyMap(water, input.waterToLight);
    const temperature = applyMap(light, input.lightToTemperature);
    const humidity = applyMap(temperature, input.temperatureToHumidty);
    const location = applyMap(humidity, input.humidityToLocation);
    if (location < min) {
      min = location;
    }
  }
  return min;
};
