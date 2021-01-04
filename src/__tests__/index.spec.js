const { createSpacing } = require('../../build/index')

const spacingDefault = createSpacing({});
const spacingEight = createSpacing({ factor: 8 });
const spacingFour = createSpacing({ factor: 4 });
const spacingRem = createSpacing({ units: 'rem' });
const spacingFull = createSpacing({ factor: 8, units: 'rem', divisor: 100 });
const spacing16Rem = createSpacing({ factor: 8, units: 'rem', divisor: 16 });
const custom = createSpacing({ factor: 8, units: 'rem', divisor: 16, precision: 3 });

describe('Common tests', () => {
  test('Single argument', () => {
    expect(spacingEight(2)).toBe('16px');
    expect(spacingDefault(0.5)).toBe('4px');

    expect(spacingDefault(2)).toBe('16px');

    expect(spacingFour(2)).toBe('8px');
    expect(spacingFour(0.5)).toBe('2px');

    expect(spacingRem(2)).toBe('16rem');
  });

  test('Some arguments', () => {
    expect(spacingEight(1, 2)).toBe('8px 16px');
    expect(spacingEight(1, 0)).toBe('8px 0px');
    expect(spacingEight(1, 2, 3)).toBe('8px 16px 24px');
    expect(spacingEight(1, 2, 3, 4)).toBe('8px 16px 24px 32px');

    expect(spacingDefault(1, 2)).toBe('8px 16px');
    expect(spacingDefault(1, 2, 3)).toBe('8px 16px 24px');
    expect(spacingDefault(1, 2, 3, 4)).toBe('8px 16px 24px 32px');

    expect(spacingRem(1, 2)).toBe('8rem 16rem');
    expect(spacingRem(1, 2, 3)).toBe('8rem 16rem 24rem');
    expect(spacingRem(1, 2, 3, 4)).toBe('8rem 16rem 24rem 32rem');

    expect(spacingFour(1, 2)).toBe('4px 8px');
    expect(spacingFour(1, 2)).toBe('4px 8px');
    expect(spacingFour(1, 2, 3)).toBe('4px 8px 12px');
    expect(spacingFour(1, 2, 3, 4)).toBe('4px 8px 12px 16px');

    expect(spacingFour(1, 2, 3, 0)).toBe('4px 8px 12px 0px');
  });

  test('Without arguments', () => {
    expect(spacingEight()).toBe('8px');
  });

  test('Full arguments', () => {
    expect(spacingFull()).toBe('0.08rem');
    expect(spacingFull(2)).toBe('0.16rem');
    expect(spacingFull(1, 2)).toBe('0.08rem 0.16rem');
    expect(spacingFull(1, 2, 3)).toBe('0.08rem 0.16rem 0.24rem');
    expect(spacingFull(1, 2, 3, 4)).toBe('0.08rem 0.16rem 0.24rem 0.32rem');
  });

  test('cut extra digits', () => {
    expect(spacing16Rem(1.25)).toBe('0.62rem');
    expect(spacing16Rem(1.3)).toBe('0.65rem');

    expect(custom(1.25)).toBe('0.625rem');
  });
});
