import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Type = "%" | "&";
export type Pulse = "low" | "high";
export type FlipFlopMemory = "on" | "off";

export class Module {
  type: Type;
  name: string;
  outputs: string[];
  memory: FlipFlopMemory | Record<string, Pulse>;

  constructor(type: Type, name: string, outputs: string[]) {
    this.type = type;
    this.name = name;
    this.outputs = outputs;
    this.memory = type === "%" ? "off" : {};
  }
}

export type Input = {
  broadcasterTargets: string[];
  modules: Record<string, Module>;
};

const preprocess = (text: string): Input => {
  let broadcasterTargets: string[] = [];
  const modules: Record<string, Module> = {};
  text.split("\n").forEach((line) => {
    const [left, right] = line.split(" -> ");
    if (left === "broadcaster") {
      broadcasterTargets = right.split(", ");
    } else {
      const [type, name] = [left.at(0), left.slice(1)];
      const outputs = right.split(", ");
      modules[name] = new Module(type as Type, name, outputs);
    }
  });
  for (const moduleName in modules) {
    const module = modules[moduleName];
    for (const output of module.outputs) {
      if (modules[output] && modules[output].type === "&") {
        modules[output].memory[moduleName] = "low";
      }
    }
  }
  return { broadcasterTargets, modules };
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
