export const createSpacing = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }) => {
  const parsedPrecision = 10 ** precision;
  const factorParsed = (factor / divisor) * parsedPrecision;

  const transform = (spacing) => ~~(spacing * factorParsed) / parsedPrecision + units;

  // `res` is a local, never an argument: declaring it as a parameter costs fewer bytes than `let`
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
