# @raiselfg/config

Shared ESLint & Prettier config.

## Install

```bash
npm i -D @goty/config eslint prettier typescript
```

## eslint.config.mjs

```js
import { eslint } from '@goty/config/eslint';

export default eslint({
  react: true,
  nextjs: true
});
```

## prettier.config.mjs

```js
export { prettier as default } from '@goty/config/prettier';
```