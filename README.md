# Spacing-helper

A tiny (122 bytes) and blazing fast standalone helper for creating consistent spacing between the elements of your UI.

```js
import { createSpacing } from 'spacing-helper';
const spacing = createSpacing({ factor: 8 }); // 8 is default scaling factor
spacing(1,2,3,4); // '8px 16px 24px 32px'
```

## Installation
`npm i spacing-helper` or `yarn add spacing-helper`

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

Name | Type | Default | Description |
------ | ------ | ------ | -----|
`divisor` | number | 1 | divisor for multiplication result of spacing and factor |
`factor` | number | 8 | scaling factor |
`precision` | number | 2 | precision of divisions |
`units` | string | "px" | units of transforms result (e.g. px, rem, em) |

## Benchmarks
Version | ops/sec |
------ | ------ |
`v3` | 2,240,720 |
`v4.x` | 26,891,052 |

