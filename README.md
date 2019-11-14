# Spacing-helper

Standalone helper for creating consistent spacing between the elements of your UI.

```js
import { createSpacing } from 'spacing-helper';
const spacing = createSpacing(8); // 8 is default scaling factor
spacing(1,2,3,4); // '8px 16px 24px 32px'
```

## Motivation

Let's see some code

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
const spacing = createSpacing(8);

expect(spacing(2)).toBe('16px');
expect(spacing(1, 2)).toBe('8px 16px');
expect(spacing(1, 2, 3)).toBe('8px 16px 24px');
expect(spacing(1, 2, 3, 4)).toBe('8px 16px 24px 32px');
```
