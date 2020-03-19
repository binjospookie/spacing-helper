interface CreateSpacing {
  readonly factor?: number;
  readonly divisor?: number;
  readonly units?: string;
}

interface Transform extends Required<CreateSpacing> {
  readonly spacing: number;
}

const transform = ({ spacing, factor, units, divisor }: Transform) => {
  const [whole, fractional] = String((spacing * factor) / divisor).split('.');

  return fractional === undefined ? `${whole}${units}` : `${whole}.${fractional.slice(0, 2)}${units}`;
};

export const createSpacing = ({ factor = 8, divisor = 1, units = 'px' }: CreateSpacing) => (
  first?: number,
  ...data: readonly number[]
) =>
  first === undefined
    ? transform({ spacing: 1, factor, divisor, units })
    : data.reduce(
        (acc, item) => `${acc} ${transform({ spacing: item, factor, divisor, units })}`,
        transform({ spacing: first, factor, divisor, units }),
      );
