import prettierConfig from 'eslint-config-prettier';

import type { FlatConfig } from '../types.js';

// Должен идти последним — гасит конфликтующие с Prettier правила
export const prettier = (): FlatConfig[] => [
  { name: 'goty/prettier', ...prettierConfig }
];