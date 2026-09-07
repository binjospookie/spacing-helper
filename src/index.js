export const createSpacing = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }) => {
  const parsedPrecision = 10 ** precision;
  const factorParsed = (factor / divisor) * parsedPrecision;
  const cache = new Map();

  // `value` and `res` below are locals, never arguments: declaring them as parameters costs fewer bytes than `let`
  const transform = (spacing, value) =>
    cache.get(spacing) || (cache.set(spacing, (value = ~~(spacing * factorParsed) / parsedPrecision + units)), value);

  return (first = 1, second, third, fourth, res) => {
    res = transform(first);

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
