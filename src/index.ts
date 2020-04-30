interface CreateSpacing {
  readonly factor?: number;
  readonly divisor?: number;
  readonly precision?: number;
  readonly units?: string;
}

const makeTransform = ({ units, precision, factor }: Omit<Required<CreateSpacing>, 'divisor'>) => (spacing: number) =>
  `${~~(spacing * factor) / precision}${units}`;

const spacingRaw = (transform: ReturnType<typeof makeTransform>) => (first: number = 1, ...data: readonly number[]) =>
  data.reduce((acc, item) => `${acc} ${transform(item)}`, transform(first));

export const createSpacing = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }: CreateSpacing) => {
  const parsedPrecision = 10 ** precision;
  const factorParsed = (factor / divisor) * parsedPrecision;
  const transform = makeTransform({ factor: factorParsed, precision: parsedPrecision, units });

  return spacingRaw(transform);
};
