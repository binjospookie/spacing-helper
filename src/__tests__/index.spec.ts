import { createSpacing } from '../';

const spacingDefault = createSpacing();
const spacingEight = createSpacing(8);
const spacingFour = createSpacing(4);

test('Single argument', () => {
  expect(spacingEight(2)).toBe('16px');
  expect(spacingDefault(0.5)).toBe('4px');

  expect(spacingDefault(2)).toBe('16px');

  expect(spacingFour(2)).toBe('8px');
  expect(spacingFour(0.5)).toBe('2px');
});

test('Some arguments', () => {
  expect(spacingEight(1, 2)).toBe('8px 16px');
  expect(spacingEight(1, 2, 3)).toBe('8px 16px 24px');
  expect(spacingEight(1, 2, 3, 4)).toBe('8px 16px 24px 32px');

  expect(spacingDefault(1, 2)).toBe('8px 16px');
  expect(spacingDefault(1, 2, 3)).toBe('8px 16px 24px');
  expect(spacingDefault(1, 2, 3, 4)).toBe('8px 16px 24px 32px');

  expect(spacingFour(1, 2)).toBe('4px 8px');
  expect(spacingFour(1, 2)).toBe('4px 8px');
  expect(spacingFour(1, 2, 3)).toBe('4px 8px 12px');
  expect(spacingFour(1, 2, 3, 4)).toBe('4px 8px 12px 16px');
});

test('Without arguments', () => {
  expect(spacingEight()).toBe('8px');
});
