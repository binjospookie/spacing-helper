import { performance } from 'perf_hooks';

import { createSpacing } from '../index';
import { createSpacingLegacy } from '../createSpacingLegacy';

const ARRAYS_COUNT = 100000;

const randomInteger = () => Math.floor(Math.random() * 5);
const randomDataSet = (dataSetSize: number) => new Array(dataSetSize).fill(0).map(randomInteger);
const randomDatasetRandomSize = () => randomDataSet(randomInteger());
const heavyCalculates = () => new Array(ARRAYS_COUNT).fill([]).map(randomDatasetRandomSize);
const displayResults = (start: number, end: number, label: string) =>
  process.stdout.write(`${label}: ${(end - start).toFixed(3)}ms\n`);

const dataToTest = heavyCalculates();
const legacySpacing = createSpacingLegacy({ factor: 8, units: 'rem', divisor: 100 });
const spacing = createSpacing({ factor: 8, units: 'rem', divisor: 100 });

describe('Performance test', () => {
  test('v2', () => {
    const startTime = performance.now();

    dataToTest.forEach((array) => legacySpacing(...array));

    const endTime = performance.now();

    displayResults(startTime, endTime, 'v2');
  });
  test('v3', () => {
    const startTime = performance.now();

    dataToTest.forEach((array) => spacing(...array));

    const endTime = performance.now();

    displayResults(startTime, endTime, 'v3');
  });
});
