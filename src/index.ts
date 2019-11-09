const multiply = (module: number, factor: number) => `${module * factor}px`;

export const createSpacing = (module: number = 8) => (first: number, ...rest: ReadonlyArray<number>): string =>
  rest.reduce((acc, item, index) => `${acc} ${multiply(module, item)}`, multiply(module, first));
