// https://adventofcode.com/2021/day/1 (Part 2)

const sum = (values: number[]): number =>
  values.reduce((acc, current) => acc + current, 0);

export const sonarSweep = (input: number[]) =>
  input
    .reduce((acc: number[], _, index, all) => {
      const chunk = all.slice(index, index + 3);
      if (chunk.length < 3) {
        return acc;
      } else {
        return [...acc, sum(chunk)];
      }
    }, [])
    .reduce((acc, value, index, all) => {
      const next = all[index + 1] || 0;
      return next > value ? acc + 1 : acc;
    }, 0);
