export const createSpacing = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }) => {
  const parsedPrecision = 10 ** precision;
  const factorParsed = (factor / divisor) * parsedPrecision;
  const cache = new Map();

  // `value` is a local, never an argument: it keeps the freshly built string so a miss doesn't read the cache twice
  const transform = (spacing, value) =>
    cache.get(spacing) || (cache.set(spacing, (value = ~~(spacing * factorParsed) / parsedPrecision + units)), value);

  return (first = 1, second, third, fourth) => {
    let res = transform(first);

    if (second * 0 === 0) {
      res += ' ' + transform(second);

      if (third * 0 === 0) {
        res += ' ' + transform(third);

        if (fourth * 0 === 0) {
          res += ' ' + transform(fourth);
        }
      }
    }

    return res;
  };
};
