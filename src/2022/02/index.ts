const Shapes = { Rock: 1, Paper: 2, Scissors: 3 };

const Responses: Record<number, Record<string, number>> = {
  [Shapes.Rock]: {
    X: Shapes.Scissors,
    Y: Shapes.Rock,
    Z: Shapes.Paper,
  },
  [Shapes.Paper]: {
    X: Shapes.Rock,
    Y: Shapes.Paper,
    Z: Shapes.Scissors,
  },
  [Shapes.Scissors]: {
    X: Shapes.Paper,
    Y: Shapes.Scissors,
    Z: Shapes.Rock,
  },
};

const charToShape = (char: string): number => {
  if (char === "A" || char === "X") {
    return Shapes.Rock;
  } else if (char == "B" || char == "Y") {
    return Shapes.Paper;
  } else if (char == "C" || char == "Z") {
    return Shapes.Scissors;
  } else {
    throw new Error(`Invalid shape: ${char}`);
  }
};

const isWin = (left: number, right: number): boolean => {
  return (
    (left === Shapes.Rock && right === Shapes.Paper) ||
    (left === Shapes.Paper && right === Shapes.Scissors) ||
    (left === Shapes.Scissors && right === Shapes.Rock)
  );
};

const score = (left: number, right: number) => {
  if (left === right) {
    return right + 3;
  } else if (isWin(left, right)) {
    return right + 6;
  } else {
    return right;
  }
};

const determineResponseShape = (left: number, expectation: string): number => {
  const response = Responses[left]?.[expectation];
  if (!response) {
    throw new Error(`Invalid shape or expectation: ${left}, ${expectation}`);
  }

  return response;
};

export const part1 = (input: string): number => {
  const pairs = input.split("\n").map((line) => {
    const [left, right] = line.split(" ");
    return [charToShape(left), charToShape(right)];
  });

  const scores = pairs.map(([left, right]) => score(left, right));
  return scores.reduce((acc, x) => acc + x, 0);
};

export const part2 = (input: string): number => {
  const scores = input.split("\n").map((line) => {
    const pair = line.split(" ");
    const left = charToShape(pair[0]);
    const right = determineResponseShape(left, pair[1]);
    return score(left, right);
  });

  return scores.reduce((acc, x) => acc + x, 0);
};
