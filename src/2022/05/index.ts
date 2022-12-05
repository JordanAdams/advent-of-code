interface Move {
  from: number;
  to: number;
  count: number;
}

type Crates = string[][];

interface Input {
  crates: Crates;
  moves: Move[];
}

const chunkStr = (xs: string, size: number): string[] => {
  if (xs.length <= size) {
    return [xs];
  }

  const piece = xs.slice(0, size);
  const rest = xs.slice(size);

  return [piece, ...chunkStr(rest, size)];
};

const parseCratesLine = (line: string): string[] => {
  return chunkStr(line, 4).map((c) => c.replace(/[\[\] ]/g, ""));
};

const parseCrates = (input: string): Crates => {
  const lines = input.split("\n").slice(0, -1);

  const crates: Crates = [];

  lines.forEach((line) => {
    parseCratesLine(line).forEach((item, i) => {
      if (!item.length) {
        return;
      }

      crates[i] = [...(crates[i] || []), item];
    });
  });

  return crates;
};

const parseMoves = (input: string): Move[] => {
  return input.split("\n").map((line) => {
    const matches = line.match(/move (\d+) from (\d+) to (\d+)/);
    if (!matches) {
      throw new Error(`Invalid move string ${line}`);
    }

    return {
      count: parseInt(matches[1], 10),
      from: parseInt(matches[2], 10) - 1,
      to: parseInt(matches[3], 10) - 1,
    };
  });
};

const parseInput = (input: string): Input => {
  const [cratesStr, movesStr] = input.split("\n\n");

  return {
    crates: parseCrates(cratesStr),
    moves: parseMoves(movesStr),
  };
};

interface ApplyMoveOptions {
  reverse?: boolean;
}

const applyMove = (
  crates: Crates,
  move: Move,
  { reverse = true }: ApplyMoveOptions = {}
): Crates => {
  let moved = crates[move.from].slice(0, move.count);
  if (reverse) {
    moved = moved.reverse();
  }

  const from = crates[move.from].slice(move.count);
  const to = [...moved, ...crates[move.to]];

  const newCrates = [...crates];
  newCrates[move.from] = from;
  newCrates[move.to] = to;

  return newCrates;
};

export const part1 = (input: string): string => {
  const { crates, moves } = parseInput(input);

  const moved = moves.reduce((acc, move) => {
    return applyMove(acc, move);
  }, crates);

  return moved.reduce((acc, crate) => `${acc}${crate[0] || ""}`, "");
};

export const part2 = (input: string): string => {
  const { crates, moves } = parseInput(input);

  const moved = moves.reduce((acc, move) => {
    return applyMove(acc, move, { reverse: false });
  }, crates);

  return moved.reduce((acc, crate) => `${acc}${crate[0] || ""}`, "");
};
