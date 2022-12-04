import { part1, part2 } from "./index";
import { exampleInput, generatedInput } from "./input";

describe("part1", () => {
  it("should work for the example input", () => {
    expect(part1(exampleInput)).toBe(24000);
  });

  it("should work for the generated input", () => {
    expect(part1(generatedInput)).toBe(70296);
  });
});

describe("part2", () => {
  it("should work for the exampleInput", () => {
    expect(part2(exampleInput)).toBe(45000);
  });

  it("should work for the generated input", () => {
    expect(part2(generatedInput)).toBe(205381);
  });
});
