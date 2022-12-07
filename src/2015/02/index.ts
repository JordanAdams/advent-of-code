type Box = [number, number, number];

const sum = (xs: number[]): number => xs.reduce((acc, n) => acc + n, 0);

const calculateBox = (l: number, w: number, h: number): number => {
  const areas = [l * w, w * h, h * l];

  return sum(areas) * 2 + Math.min(...areas);
};

const calculateRibbon = (l: number, w: number, h: number): number => {
  const [s1, s2] = [l, w, h].sort((a, b) => a - b);

  return 2 * s1 + 2 * s2 + l * w * h;
};

const parseInput = (input: string): Box[] => {
  return input.split("\n").map((line): Box => {
    const [l, w, h] = line.split("x");
    return [parseInt(l, 10), parseInt(w, 10), parseInt(h, 10)];
  });
};

export const part1 = (input: string): number => {
  const boxes = parseInput(input);
  const paper = boxes.map((box) => calculateBox(...box));
  return sum(paper);
};

export const part2 = (input: string): number => {
  const boxes = parseInput(input);
  const ribbon = boxes.map((box) => calculateRibbon(...box));
  return sum(ribbon);
};
