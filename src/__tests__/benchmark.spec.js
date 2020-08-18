const benchmarkSpec = require('benchmark');
const { createSpacing } = require('../../build/index');

const suite = new benchmarkSpec.Suite();
const spacing = createSpacing({ factor: 8, units: 'rem', divisor: 100 });

const formatNumber = (x) =>
  String(x)
    .replace(/\d{3}$/, ',$&')
    .replace(/^(\d)(\d{3})/, '$1,$2');

test('Operations per second', () => {
  suite
    .add('v3', () => {
      spacing(1, 2, 3, 4);
    })
    .on('cycle', (event) => {
      const { name, hz } = event.target;
      const hzParsed = formatNumber(hz.toFixed(0)).padStart(9);

      process.stdout.write(`${name}: ${hzParsed} ops/sec\n`);
    })
    .run();
});
