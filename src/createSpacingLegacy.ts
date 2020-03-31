interface CreateSpacing {
  readonly factor?: number;
  readonly divisor?: number;
  readonly precision?: number;
  readonly units?: string;
}

interface Transform extends Required<CreateSpacing> {
  readonly spacing: number;
}

const transform = ({ spacing, factor, units, divisor, precision }: Transform) => {
  const [whole, fractional] = String((spacing * factor) / divisor).split('.');

  return fractional === undefined ? `${whole}${units}` : `${whole}.${fractional.slice(0, precision)}${units}`;
};

export const createSpacingLegacy = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }: CreateSpacing) => (
  first?: number,
  ...data: readonly number[]
) =>
  first === undefined
    ? transform({ spacing: 1, factor, divisor, precision, units })
    : data.reduce(
        (acc, item) => `${acc} ${transform({ spacing: item, factor, divisor, precision, units })}`,
        transform({ spacing: first, factor, divisor, precision, units }),
      );
