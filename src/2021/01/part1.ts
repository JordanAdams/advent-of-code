// https://adventofcode.com/2021/day/1 (Part 1)

export const sonarSweep = (input: number[]) =>
  input.reduce((acc, value, index) => {
    if (input[index + 1] === undefined) {
      return acc;
    } else {
      return input[index + 1] > value ? acc + 1 : acc;
    }
  }, 0);
