import { dive } from "./part2";
import generatedInput from "./input";

it("should work for example input", () => {
  const input: [string, number][] = [
    ["forward", 5],
    ["down", 5],
    ["forward", 8],
    ["up", 3],
    ["down", 8],
    ["forward", 2],
  ];

  expect(dive(input)).toBe(900);
});

it("should work for generated input", () => {
  expect(dive(generatedInput)).toBe(1592426537);
});
