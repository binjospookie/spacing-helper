const transform = (spacing: number, factor: number) => `${spacing * factor}px`;

export const createSpacing = (spacing: number = 8) => (first?: number, ...data: readonly number[]) =>
  first === undefined
    ? transform(spacing, 1)
    : data.reduce((acc, item) => `${acc} ${transform(spacing, item)}`, transform(spacing, first));
