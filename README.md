# Spacing-helper

Standalone helper for creating consistent spacing between the elements of your UI.

```
npm i --save-dev spacing-helper or yarn add spacing-helper --dev
```

```typescript
import { createSpacing } from 'spacing-helper';
const spacing = createSpacing(8); // 8 is default scaling factor
spacing(1,2,3,4); // '8px 16px 24px 32px'
```

## Motivation

Let's see some code

```
const MODULE = 8;

const HeaderStyled = styled.header`
    margin: ${MODULE * 2}px ${MODULE * 3}px;
    ...
`;
```

Make it pretty

```
const HeaderStyled = styled.header`
    margin: ${spacing(2)} ${spacing(3)};
    ...
`;
```

And...

```
const HeaderStyled = styled.header`
    margin: ${spacing(2, 3)};
    ...
`;
```
