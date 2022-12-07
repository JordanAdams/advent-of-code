const path = require("path");

interface Command {
  name: string;
  args: string[];
  output: string;
}

interface File {
  name: string;
  size: number;
}

interface State {
  cwd: string;
  dirs: Record<string, File[]>;
}

const parseInput = (input: string): Command[] => {
  const chunks = input.split(/^\$/m).slice(1);

  return chunks.map((chunk): Command => {
    const [command, ...output] = chunk.split("\n");
    const [name, ...args] = command.trim().split(" ");
    return { name, args, output: output.join("\n").trim() };
  });
};

const cd = (state: State, { args }: Command): State => {
  return {
    ...state,
    cwd: path.resolve(path.join(state.cwd, args[0])),
  };
};

const ls = (state: State, { output }: Command): State => {
  const lines = output.split("\n");

  const files: File[] = lines
    .filter((line) => !line.match(/^dir/))
    .map((line) => {
      const [size, name] = line.split(" ");
      return { name, size: parseInt(size) };
    });

  const dir = state.dirs[state.cwd] || [];

  return { ...state, dirs: { ...state.dirs, [state.cwd]: [...dir, ...files] } };
};

const run = (state: State, command: Command): State => {
  switch (command.name) {
    case "cd":
      return cd(state, command);
    case "ls":
      return ls(state, command);
    default:
      return state;
  }
};

const calculateDirectorySizes = ({ dirs }: State): Record<string, number> => {
  return Object.entries(dirs).reduce((acc, [dir, files]) => {
    const nested = Object.keys(dirs).reduce((acc, d) => {
      if (d !== dir && d.startsWith(dir)) {
        return [...acc, ...dirs[d]];
      } else {
        return [...acc];
      }
    }, [] as File[]);

    const size = [...files, ...nested].reduce(
      (acc, file) => acc + file.size,
      0
    );

    return { ...acc, [dir]: size };
  }, {} as Record<string, number>);
};

export const part1 = (input: string): number => {
  const commands = parseInput(input);

  const initialState: State = { cwd: "/", dirs: {} };

  const finalState = commands.reduce((acc: State, command) => {
    return run(acc, command);
  }, initialState);

  const sizes = calculateDirectorySizes(finalState);

  return Object.values(sizes).reduce(
    (acc, size) => (size <= 100000 ? acc + size : acc),
    0
  );
};

export const part2 = (input: string): number => {
  const commands = parseInput(input);

  const initialState: State = { cwd: "/", dirs: {} };

  const finalState = commands.reduce((acc: State, command) => {
    return run(acc, command);
  }, initialState);

  const sizes = calculateDirectorySizes(finalState);

  const sortedSizes = Object.values(sizes).sort((a, b) => a - b);

  const largest = sortedSizes[sortedSizes.length - 1];
  const target = 30000000 - (70000000 - largest);

  const match = sortedSizes.find((size) => size >= target);
  if (!match) {
    throw new Error("No valid directories");
  }

  return match;
};
