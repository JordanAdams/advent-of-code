// https://adventofcode.com/2021/day/2

export const dive = (input: [string, number][]) => {
  const res = input.reduce(
    ([horizontal, depth], [direction, value]) => {
      switch (direction) {
        case "up":
          return [horizontal, depth - value];
        case "down":
          return [horizontal, depth + value];
        case "forward":
          return [horizontal + value, depth];
        default:
          return [horizontal, depth];
      }
    },
    [0, 0]
  );

  return res[0] * res[1];
};
