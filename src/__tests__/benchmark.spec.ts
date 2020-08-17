// @ts-ignore
import * as benchmarkSpec from 'benchmark';

import { createSpacing } from '../index';
import { createSpacingLegacy } from '../createSpacingLegacy';

const suite = new benchmarkSpec.Suite();
const legacySpacing = createSpacingLegacy({ factor: 8, units: 'rem', divisor: 100 });
const spacing = createSpacing({ factor: 8, units: 'rem', divisor: 100 });

const formatNumber = (x: number) =>
  String(x)
    .replace(/\d{3}$/, ',$&')
    .replace(/^(\d)(\d{3})/, '$1,$2');

test('Operations per second', () => {
  suite
    .add('v2', () => {
      legacySpacing(1, 2, 3, 4);
    })
    .add('v3', () => {
      spacing(1, 2, 3, 4);
    })
    // tslint:disable-next-line
    .on('cycle', (event: any) => {
      const { name, hz } = event.target;
      const hzParsed = formatNumber(hz.toFixed(0)).padStart(9);

      process.stdout.write(`${name}: ${hzParsed} ops/sec\n`);
    })
    .run();
});
