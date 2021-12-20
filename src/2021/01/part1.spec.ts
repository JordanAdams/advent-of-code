import { sonarSweep } from "./part1";
import generatedInput from "./part1.input";

it("should work for the example input", () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  const expected = 7;

  expect(sonarSweep(input)).toBe(expected);
});

it("should work for the generated input", () => {
  expect(sonarSweep(generatedInput)).toBe(1532);
});
