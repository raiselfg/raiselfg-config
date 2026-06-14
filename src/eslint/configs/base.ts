import js from '@eslint/js';
import globals from 'globals';
import unicorn from 'eslint-plugin-unicorn';

import type { FlatConfig } from '../types.js';

export const base = (): FlatConfig[] => [
  js.configs.recommended,
  {
    name: 'goty/base',
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: { unicorn },
    rules: {
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/throw-new-error': 'error',
      'unicorn/no-array-for-each': 'warn',
      'unicorn/no-useless-undefined': 'warn'
    }
  }
];