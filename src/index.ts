const multiply = (module: number, factor: number) => `${module * factor}px`;

export const createSpacing = (module: number = 8) => (first: number, ...rest: readonly number[]): string =>
  rest.reduce((acc, item) => `${acc} ${multiply(module, item)}`, multiply(module, first));
