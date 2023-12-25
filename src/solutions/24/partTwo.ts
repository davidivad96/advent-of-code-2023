import * as assert from "assert";
import { init } from "z3-solver";

export const partTwo = async (input: number[][]) => {
  const { Context } = await init();
  const { Solver, Int } = Context("main");
  const pxr = Int.const("pxr");
  const pyr = Int.const("pyr");
  const pzr = Int.const("pzr");
  const vxr = Int.const("vxr");
  const vyr = Int.const("vyr");
  const vzr = Int.const("vzr");
  const solver = new Solver();
  for (const [i, [px, py, pz, vx, vy, vz]] of input.slice(0, 3).entries()) {
    const t = Int.const(`t${i}`);
    solver.add(t.ge(0));
    solver.add(t.mul(vxr).add(pxr).eq(t.mul(vx).add(px)));
    solver.add(t.mul(vyr).add(pyr).eq(t.mul(vy).add(py)));
    solver.add(t.mul(vzr).add(pzr).eq(t.mul(vz).add(pz)));
  }
  const check = await solver.check();
  assert(check === "sat", "Unsatisfied");
  const model = solver.model();
  const result = [model.eval(pxr), model.eval(pyr), model.eval(pzr)]
    .map(Number)
    .reduce((sum, curr) => sum + curr, 0);
  console.log(result);
  return result;
};
