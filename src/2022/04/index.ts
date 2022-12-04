type Range = [number, number];

type Pair = [Range, Range];

const isWithin = (a: Range, b: Range): boolean => {
  return b[0] >= a[0] && b[1] <= a[1];
};

const between = (min: number, max: number, x: number): boolean => {
  return x >= min && x <= max;
};

const isOverlap = ([min, max]: Range, b: Range): boolean => {
  return between(min, max, b[0]) || between(min, max, b[1]);
};

const parsePair = (str: string): Pair => {
  const [l, r] = str.split(",");
  return [parseRange(l), parseRange(r)];
};

const parseRange = (str: string): Range => {
  const [l, r] = str.split("-");
  return [parseInt(l, 10), parseInt(r, 10)];
};

const parseInput = (input: string): Pair[] => {
  return input.split("\n").map((pair) => {
    return parsePair(pair);
  });
};

export const part1 = (input: string): number => {
  const matches = parseInput(input).filter(([l, r]) => {
    return isWithin(l, r) || isWithin(r, l);
  });

  return matches.length;
};

export const part2 = (input: string): number => {
  const matches = parseInput(input).filter(([l, r]) => {
    return isOverlap(l, r) || isOverlap(r, l);
  });

  return matches.length;
};
