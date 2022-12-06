type Position = [number, number];

const performStep = ([x, y]: Position, step: string): Position => {
  switch (step) {
    case "^":
      return [x, y + 1];
    case "v":
      return [x, y - 1];
    case "<":
      return [x - 1, y];
    case ">":
      return [x + 1, y];
    default:
      return [x, y];
  }
};

const performSteps = (start: Position, steps: string[]): Position[] => {
  return steps.reduce(
    (acc: Position[], step) => {
      const prev = acc[acc.length - 1];
      return [...acc, performStep(prev, step)];
    },
    [start]
  );
};

const uniqueBy = <T>(xs: T[], fn: (x: T) => any): T[] => {
  const set = new Set(xs.map(fn));
  return Array.from(set);
};

export const part1 = (input: string): number => {
  const steps = input.split("");

  const start: Position = [0, 0];
  const visits: Position[] = performSteps(start, steps);
  const uniqueVisits = uniqueBy(visits, ([x, y]) => `${x},${y}`);

  return uniqueVisits.length;
};

export const part2 = (input: string): number => {
  const steps = input.split("");
  const santaSteps = steps.filter((_, i) => i % 2 === 0);
  const robotSteps = steps.filter((_, i) => i % 2 !== 0);

  const start: Position = [0, 0];
  const visits: Position[] = [
    ...performSteps(start, santaSteps),
    ...performSteps(start, robotSteps),
  ];

  const uniqueVisits = uniqueBy(visits, ([x, y]) => `${x},${y}`);

  return uniqueVisits.length;
};
