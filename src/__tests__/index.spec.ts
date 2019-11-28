import test from 'ava';

import { createSpacing } from '../';

const spacingDefault = createSpacing();
const spacingEight = createSpacing(8);
const spacingFour = createSpacing(4);

test('Single argument', ({ is }) => {
  is(spacingEight(2), '16px');
  is(spacingEight(0.5), '4px');

  is(spacingDefault(2), '16px');

  is(spacingFour(2), '8px');
  is(spacingFour(0.5), '2px');
});

test('Some arguments', ({ is }) => {
  is(spacingEight(1, 2), '8px 16px');
  is(spacingEight(1, 2, 3), '8px 16px 24px');
  is(spacingEight(1, 2, 3, 4), '8px 16px 24px 32px');

  is(spacingDefault(1, 2), '8px 16px');
  is(spacingDefault(1, 2, 3), '8px 16px 24px');
  is(spacingDefault(1, 2, 3, 4), '8px 16px 24px 32px');

  is(spacingFour(1, 2), '4px 8px');
  is(spacingFour(1, 2, 3), '4px 8px 12px');
  is(spacingFour(1, 2, 3, 4), '4px 8px 12px 16px');
});

test('Incorrect argument', ({ is }) => {
  // @ts-ignore
  is(spacingEight(), 'NaNpx');
});
