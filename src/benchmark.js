const b = require('benny');
const { createSpacing } = require('../build/index');

const spacing = createSpacing({ factor: 8, units: 'rem', divisor: 100 });

b.suite(
  'Common',
  b.add('v4', () => {
    spacing(1, 2, 3, 4);
  }),
  b.cycle(),
  b.complete(),
);
