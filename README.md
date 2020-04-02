# Spacing-helper
![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
![Version](https://badgen.net/npm/v/spacing-helper)
![Size](https://badgen.net/bundlephobia/minzip/spacing-helper)
![CI](https://github.com/binjospookie/spacing-helper/workflows/Build/badge.svg)


Standalone helper for creating consistent spacing between the elements of your UI.

```js
import { createSpacing } from 'spacing-helper';
const spacing = createSpacing({ factor: 8 }); // 8 is default scaling factor
spacing(1,2,3,4); // '8px 16px 24px 32px'
```

## Installation
`npm i spacing-helper`

## Motivation

Let's see some code

```js
const HeaderStyled = styled.header`
    margin: 16px 24px;
    ...
`;
```

Make it consistent

```js
const MODULE = 8;

const HeaderStyled = styled.header`
    margin: ${MODULE * 2}px ${MODULE * 3}px;
    ...
`;
```

Make it pretty

```js
const HeaderStyled = styled.header`
    margin: ${spacing(2)} ${spacing(3)};
    ...
`;
```

And...

```js
const HeaderStyled = styled.header`
    margin: ${spacing(2, 3)};
    ...
`;
```

## More examples
```js
const spacing = createSpacing({ factor: 8 });

expect(spacing()).toBe('8px');
expect(spacing(2)).toBe('16px');
expect(spacing(1, 2)).toBe('8px 16px');
expect(spacing(1, 2, 3)).toBe('8px 16px 24px');
expect(spacing(1, 2, 3, 4)).toBe('8px 16px 24px 32px');
```

```js
const spacingFull = createSpacing({ factor: 8, units: 'rem', divisor: 100 });

expect(spacingFull(1, 2)).toBe('0.08rem 0.16rem');
expect(spacingFull(1, 2, 3)).toBe('0.08rem 0.16rem 0.24rem');
expect(spacingFull(1, 2, 3, 4)).toBe('0.08rem 0.16rem 0.24rem 0.32rem');
```

## API
### factor
Description: scaling factor<br>
Type: number<br>
Default: 8<br>
### divisor
Description: divisor for multiplication result of spacing and factor
Type: number<br>
Default: 1<br>
### precision
Description: precision of divisions
Type: number<br>
Default: 2<br>
### units
Description: units of transforms result (e.g. px, rem, em)
Type: string<br>
Default: px<br>

## Benchmarks
```
v2: 417,465 ops/sec
v3: 2,240,720 ops/sec

v2: 125.060ms
v3: 24.724ms
```
