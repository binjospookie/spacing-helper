interface CreateSpacing {
  readonly factor?: number;
  readonly divisor?: number;
  readonly precision?: number;
  readonly units?: string;
}

const makeTransform = ({ factor, units, divisor, precision }: Required<CreateSpacing>) => (spacing: number) => {
  const [whole, fractional] = String((spacing * factor) / divisor).split(/\./);

  return fractional === undefined ? `${whole}${units}` : `${whole}.${fractional.slice(0, precision)}${units}`;
};

const spacingRaw = (transform: ReturnType<typeof makeTransform>) => (first?: number, ...data: readonly number[]) =>
  data.reduce((acc, item) => `${acc} ${transform(item)}`, transform(first || 1));

export const createSpacing = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }: CreateSpacing) =>
  spacingRaw(makeTransform({ factor, divisor, precision, units }));
