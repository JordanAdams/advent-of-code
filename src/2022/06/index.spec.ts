import { part1, part2 } from ".";
import { exampleInput, generatedInput } from "./input";

describe("part1", () => {
  it("should work for example input", () => {
    expect(part1(exampleInput)).toBe(10);
  });

  it("should work for generated input", () => {
    expect(part1(generatedInput)).toBe(1142);
  });
});

describe("part2", () => {
  it("should work for example input", () => {
    expect(part2(exampleInput)).toBe(29);
  });

  it("should work for generated input", () => {
    expect(part2(generatedInput)).toBe(2803);
  });
});
