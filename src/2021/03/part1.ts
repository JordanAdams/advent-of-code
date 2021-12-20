// https://adventofcode.com/2021/day/3

const mostPrevalentBit = (arr: string[]): string => {
  const results = arr.reduce(
    ({ ones, zeroes }, current) => {
      return {
        ones: current === "1" ? ones + 1 : ones,
        zeroes: current === "0" ? zeroes + 1 : zeroes,
      };
    },
    { ones: 0, zeroes: 0 }
  );

  return results.ones > results.zeroes ? "1" : "0";
};

export const binaryDiagnostic = (input: string[]) => {
  const columns = input.reduce((acc, line) => {
    const bits = line.split("");
    bits.forEach((bit, bitIndex) => {
      if (!acc[bitIndex]) {
        acc[bitIndex] = [];
      }

      acc[bitIndex].push(bit);
    });

    return acc;
  }, [] as string[][]);

  const gamma = columns.map(mostPrevalentBit).join("");
  const epsilon = gamma
    .split("")
    .map((x) => (x === "1" ? "0" : "1"))
    .join("");

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};
