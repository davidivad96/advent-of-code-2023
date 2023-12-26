import * as assert from "assert";
import { Input, Pulse } from ".";
import { lcm } from "../../utils";

type Queue = {
  origin: string;
  pulse: Pulse;
  target: string;
}[];

export const partTwo = ({ broadcasterTargets, modules }: Input) => {
  let i = 0;
  const feedModule = Object.values(modules).filter((module) =>
    module.outputs.includes("rx")
  );
  assert(feedModule.length === 1, "No unique feed");
  const { name: feed } = feedModule[0];
  const cycleLengths: Record<string, number> = {};
  const seen: Record<string, number> = Object.values(modules)
    .filter((module) => module.outputs.includes(feed))
    .reduce((acc, { name }) => ({ ...acc, [name]: 0 }), {});
  while (true) {
    i++;
    const queue: Queue = broadcasterTargets.map((target) => ({
      origin: "broadcaster",
      pulse: "low",
      target,
    }));
    while (queue.length > 0) {
      const { origin, pulse, target } = queue.shift();
      const module = modules[target];
      if (module) {
        const { type, name, outputs } = module;
        if (name === feed && pulse === "high") {
          seen[origin]++;
          if (!cycleLengths[origin]) {
            cycleLengths[origin] = i;
          } else {
            assert(
              i === seen[origin] * cycleLengths[origin],
              "Cycle length doesn't match"
            );
          }
          if (Object.values(seen).every((val) => val > 0)) {
            return lcm(Object.values(cycleLengths));
          }
        }
        if (type === "%" && pulse === "low") {
          module.memory = module.memory === "off" ? "on" : "off";
          const newPulse: Pulse = module.memory === "on" ? "high" : "low";
          for (const output of outputs) {
            queue.push({ origin: name, pulse: newPulse, target: output });
          }
        } else if (type === "&") {
          module.memory[origin] = pulse;
          const newPulse: Pulse = Object.values(module.memory).every(
            (val) => val === "high"
          )
            ? "low"
            : "high";
          for (const output of outputs) {
            queue.push({ origin: name, pulse: newPulse, target: output });
          }
        }
      }
    }
  }
};
