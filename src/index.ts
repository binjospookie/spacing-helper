interface CreateSpacing {
  readonly factor?: number;
  readonly divisor?: number;
  readonly precision?: number;
  readonly units?: string;
}

export const createSpacing = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }: CreateSpacing) => {
  const parsedPrecision = 10 ** precision;
  const factorParsed = (factor / divisor) * parsedPrecision;
  const cache = new Map<number, string>();

  const transform = (spacing: number) => {
    const valueFromCache = cache.get(spacing);
    if (valueFromCache) {
      return valueFromCache;
    }

    const result = `${~~(spacing * factorParsed) / parsedPrecision}${units}`;
    cache.set(spacing, result);
    return result;
  };

  return (first: number = 1, ...data: readonly number[]) =>
    data.reduce((acc, item) => `${acc} ${transform(item)}`, transform(first));
};
