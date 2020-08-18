import type { CreateSpacing } from './types';

export const createSpacing = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }: CreateSpacing) => {
  const parsedPrecision = 10 ** precision;
  const factorParsed = (factor / divisor) * parsedPrecision;
  const cache = new Map<number, string>();

  const transform = (spacing: number) => {
    const valueFromCache = cache.get(spacing);
    if (valueFromCache) {
      return valueFromCache;
    }

    const valueToCache = `${~~(spacing * factorParsed) / parsedPrecision}${units}`;
    cache.set(spacing, valueToCache);
    return valueToCache;
  };

  // yes, it's faster than reduce
  return (first = 1, second?: number, third?: number, fourth?: number) => {
    let res = transform(first);

    if (!second) {
      return res;
    }

    res = `${res} ${transform(second)}`;

    if (!third) {
      return res;
    }

    res = `${res} ${transform(third)}`;

    return fourth ? `${res} ${transform(fourth)}` : res;
  };
};
