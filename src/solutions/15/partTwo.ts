import { calculateHash } from "./utils";

type Operation = "ADD" | "REMOVE";

export const partTwo = (input: string[]) => {
  const boxes = new Map<number, { label: string; focalLength: number }[]>();
  for (const step of input) {
    const operation: Operation = step.includes("=") ? "ADD" : "REMOVE";
    if (operation === "ADD") {
      const [label, focalLength] = step.split("=");
      const hash = calculateHash(label);
      const lensArray = boxes.get(hash) || [];
      const foundIndex = lensArray.findIndex((lens) => lens.label === label);
      if (foundIndex !== -1) {
        lensArray[foundIndex] = { label, focalLength: +focalLength };
        boxes.set(hash, lensArray);
      } else {
        boxes.set(hash, [...lensArray, { label, focalLength: +focalLength }]);
      }
    } else {
      const [label] = step.split("-");
      const hash = calculateHash(label);
      const lensArray = boxes.get(hash) || [];
      const foundIndex = lensArray.findIndex((lens) => lens.label === label);
      if (foundIndex !== -1) {
        lensArray.splice(foundIndex, 1);
        boxes.set(hash, lensArray);
      }
    }
  }
  return [...boxes.entries()].reduce(
    (acc, [box, lensArray]) =>
      acc +
      lensArray.reduce(
        (sum, { focalLength }, index) =>
          sum + (box + 1) * (index + 1) * focalLength,
        0
      ),
    0
  );
};
