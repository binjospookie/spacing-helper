const m = (module: number, factor: number) => `${module * factor}px`;

export const createSpacing = (module: number) => (first: number, ...rest: ReadonlyArray<number>): string =>
  rest.reduce((acc, item) => `${acc} ${m(module, item)}`, m(module, first));
