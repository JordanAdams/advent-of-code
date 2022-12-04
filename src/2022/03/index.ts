type NestedList<T> = Array<T | NestedList<T>>;

const flatten = <T>(xs: NestedList<T>): T[] => {
  return xs.reduce((acc: T[], x) => {
    if (Array.isArray(x)) {
      return [...acc, ...flatten(x)];
    } else {
      return [...acc, x];
    }
  }, []);
};

const charToPriority = (char: string): number => {
  if (char.match(/^[a-z]$/)) {
    return char.charCodeAt(0) - 96;
  } else if (char.match(/^[A-Z]$/)) {
    return char.charCodeAt(0) - 38;
  } else {
    throw new Error(`Invalid char: ${char}`);
  }
};

const unique = <T>(xs: T[]): T[] => {
  return xs.reduce((acc: T[], x) => {
    return acc.includes(x) ? acc : [...acc, x];
  }, []);
};

const duplicates = <T>(left: T[], right: T[]): T[] => {
  const found = left.filter((char) => right.includes(char));
  return unique(found);
};

const findCommon = <T>(sets: T[][]): T[] => {
  const all = Array.from(new Set(flatten(sets)));
  return all.filter((value) => sets.every((set) => set.includes(value)));
};

const parseInput = (input: string): [string[], string[]][] => {
  return input.split("\n").map((line) => {
    const items = line.split("");
    const left = items.slice(0, items.length / 2);
    const right = items.slice(items.length / 2);
    return [left, right];
  });
};

const chunk = <T>(xs: T[], size: number): T[][] => {
  if (xs.length <= size) {
    return [xs];
  }

  const piece = xs.slice(0, size);
  const rest = xs.slice(size);

  return [piece, ...chunk(rest, size)];
};

export const part1 = (input: string): number => {
  return parseInput(input)
    .reduce((acc: string[], [l, r]) => [...acc, ...duplicates(l, r)], [])
    .reduce((acc: number, char) => acc + charToPriority(char), 0);
};

export const part2 = (input: string): number => {
  const lines = input.split("\n").map((line) => line.split(""));
  const groups = chunk(lines, 3);

  const chars = flatten(groups.map((group) => findCommon(group)));

  return chars.reduce((acc, char) => acc + charToPriority(char), 0);
};
