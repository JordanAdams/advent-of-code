import { binaryDiagnostic } from "./part1";
import generatedInput from "./input";

it("should work for the example input", () => {
  const input = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
  ];

  expect(binaryDiagnostic(input)).toBe(198);
});

it("should work for the generated input", () => {
  expect(binaryDiagnostic(generatedInput)).toBe(3309596);
});
