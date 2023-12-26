import { Input, Pulse } from ".";

type Queue = {
  origin: string;
  pulse: Pulse;
  target: string;
}[];

export const partOne = ({ broadcasterTargets, modules }: Input) => {
  const n = 1000;
  let lowCount = 0;
  let highCount = 0;
  for (let i = 0; i < n; i++) {
    lowCount++;
    const queue: Queue = broadcasterTargets.map((target) => ({
      origin: "broadcaster",
      pulse: "low",
      target,
    }));
    while (queue.length > 0) {
      const { origin, pulse, target } = queue.shift();
      if (pulse === "low") {
        lowCount++;
      } else {
        highCount++;
      }
      const module = modules[target];
      if (module) {
        const { type, name, outputs } = module;
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
  return lowCount * highCount;
};
