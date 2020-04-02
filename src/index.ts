interface CreateSpacing {
  readonly factor?: number;
  readonly divisor?: number;
  readonly precision?: number;
  readonly units?: string;
}

const spacingRaw = (transform: ReturnType<typeof makeTransform>) => (first: number = 1, ...data: readonly number[]) =>
  data.reduce((acc, item) => `${acc} ${transform(item)}`, transform(first));

const makeTransform = ({ units, precision, factor }: Omit<Required<CreateSpacing>, 'divisor'>) => (spacing: number) =>
  // @ts-ignore no string cast. it's performance hack
  `${parseInt(spacing * factor, 10) / precision}${units}`;

export const createSpacing = ({ factor = 8, divisor = 1, precision = 2, units = 'px' }: CreateSpacing) => {
  const parsedPrecision = 10 ** precision;
  const factorParsed = (factor / divisor) * parsedPrecision;

  return spacingRaw(makeTransform({ factor: factorParsed, precision: parsedPrecision, units }));
};
