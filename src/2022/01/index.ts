const sum = (xs: number[]): number => xs.reduce((acc, x) => acc + x, 0);

const parseInput = (input: string): number[][] => {
  return input
    .split(/\n\n/)
    .map((chunk) => chunk.split("\n").map((line) => parseInt(line, 10)));
};

export const part1 = (input: string): number => {
  const totals = parseInput(input).map((inventory) => sum(inventory));
  return Math.max(...totals);
};

export const part2 = (input: string): number => {
  const totals = parseInput(input).map((inventory) => sum(inventory));
  const sorted = [...totals].sort((a, b) => b - a);


  return sum(sorted.slice(0, 3));
};
