const createSpacing = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }) => {
  const parsedPrecision = 10 ** precision;
  const factorParsed = (factor / divisor) * parsedPrecision;
  const cache = new Map();

  const transform = (spacing) => {
    const valueFromCache = cache.get(spacing);
    if (valueFromCache) {
      return valueFromCache;
    }

    const valueToCache = `${~~(spacing * factorParsed) / parsedPrecision}${units}`;
    cache.set(spacing, valueToCache);
    return valueToCache;
  };

  // yes, it's faster than reduce
  return (first = 1, second, third, fourth) => {
    let res = transform(first);

    if (second * 0 !== 0) {
      return res;
    }

    res = `${res} ${transform(second)}`;

    if (third * 0 !== 0) {
      return res;
    }

    res = `${res} ${transform(third)}`;

    return fourth * 0 !== 0 ? res : `${res} ${transform(fourth)}`;
  };
};

export { createSpacing };
