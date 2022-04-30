import { test } from 'uvu';
import { equal } from 'uvu/assert';

import { createSpacing } from '../index.js';

const spacingDefault = createSpacing({});
const spacingEight = createSpacing({ factor: 8 });
const spacingFour = createSpacing({ factor: 4 });
const spacingRem = createSpacing({ units: 'rem' });
const spacingFull = createSpacing({ factor: 8, units: 'rem', divisor: 100 });
const spacing16Rem = createSpacing({ factor: 8, units: 'rem', divisor: 16 });
const custom = createSpacing({ factor: 8, units: 'rem', divisor: 16, precision: 3 });

test('Single argument', () => {
  equal(spacingEight(2), '16px');
  equal(spacingDefault(0.5), '4px');

  equal(spacingDefault(2), '16px');

  equal(spacingFour(2), '8px');
  equal(spacingFour(0.5), '2px');

  equal(spacingRem(2), '16rem');
});

test('Some arguments', () => {
  equal(spacingEight(1, 2), '8px 16px');
  equal(spacingEight(1, 0), '8px 0px');
  equal(spacingEight(1, 2, 3), '8px 16px 24px');
  equal(spacingEight(1, 2, 3, 4), '8px 16px 24px 32px');

  equal(spacingDefault(1, 2), '8px 16px');
  equal(spacingDefault(1, 2, 3), '8px 16px 24px');
  equal(spacingDefault(1, 2, 3, 4), '8px 16px 24px 32px');

  equal(spacingRem(1, 2), '8rem 16rem');
  equal(spacingRem(1, 2, 3), '8rem 16rem 24rem');
  equal(spacingRem(1, 2, 3, 4), '8rem 16rem 24rem 32rem');

  equal(spacingFour(1, 2), '4px 8px');
  equal(spacingFour(1, 2), '4px 8px');
  equal(spacingFour(1, 2, 3), '4px 8px 12px');
  equal(spacingFour(1, 2, 3, 4), '4px 8px 12px 16px');

  equal(spacingFour(1, 2, 3, 0), '4px 8px 12px 0px');
});

test('Without arguments', () => {
  equal(spacingEight(), '8px');
});

test('Full arguments', () => {
  equal(spacingFull(), '0.08rem');
  equal(spacingFull(2), '0.16rem');
  equal(spacingFull(1, 2), '0.08rem 0.16rem');
  equal(spacingFull(1, 2, 3), '0.08rem 0.16rem 0.24rem');
  equal(spacingFull(1, 2, 3, 4), '0.08rem 0.16rem 0.24rem 0.32rem');
});

test('cut extra digits', () => {
  equal(spacing16Rem(1.25), '0.62rem');
  equal(spacing16Rem(1.3), '0.65rem');

  equal(custom(1.25), '0.625rem');
})

test.run()
