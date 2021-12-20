import { sonarSweep } from "./part2";
import generatedInput from "./part2.input";

it("should work for the example input", () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  const output = 5;

  expect(sonarSweep(input)).toBe(output);
});

it("should work for the generated input", () => {
  expect(sonarSweep(generatedInput)).toBe(1571);
});
