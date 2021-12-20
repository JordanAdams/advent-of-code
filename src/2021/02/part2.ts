// https://adventofcode.com/2021/day/2

export const dive = (input: [string, number][]) => {
  const res = input.reduce(
    ([horizontal, depth, aim], [direction, value]) => {
      switch (direction) {
        case "up":
          return [horizontal, depth, aim - value];
        case "down":
          return [horizontal, depth, aim + value];
        case "forward":
          return [horizontal + value, depth + aim * value, aim];
        default:
          return [horizontal, depth, aim];
      }
    },
    [0, 0, 0]
  );

  return res[0] * res[1];
};
