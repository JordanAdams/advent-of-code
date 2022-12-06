const isMarker = (chars: string[]) => {
  const set = new Set(chars);
  return set.size === chars.length;
};

export const part1 = (input: string): number => {
  const chars = input.split("");

  for (let index = 0; index < chars.length - 3; index++) {
    const chunk = chars.slice(index, index + 4);
    if (isMarker(chunk)) {
      return index + 4;
    }
  }

  throw new Error(`Invalid input: ${input}`);
};

export const part2 = (input: string): number => {
  const chars = input.split("");

  for (let index = 0; index < chars.length - 13; index++) {
    const chunk = chars.slice(index, index + 14);
    if (isMarker(chunk)) {
      return index + 14;
    }
  }

  throw new Error(`Invalid input: ${input}`);
};
