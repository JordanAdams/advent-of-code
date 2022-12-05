export const part1 = (input: string): number => {
  return input.split("").reduce((acc, char) => {
    return char === "(" ? acc + 1 : acc - 1;
  }, 0);
};

export const part2 = (input: string): number => {
  const chars = input.split("");

  let floor = 0;
  for (let i = 0; i < chars.length; i++) {
    floor = chars[i] === "(" ? floor + 1 : floor - 1;
    if (floor < 0) {
      return i + 1;
    }
  }

  throw new Error(`Invalid input: ${input}`);
};
