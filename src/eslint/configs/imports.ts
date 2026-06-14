import importX from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';

import type { FlatConfig } from '../types.js';

export const imports = (): FlatConfig[] => [
  {
    name: 'goty/imports',
    plugins: { 'import-x': importX, perfectionist },
    rules: {
      'import-x/no-duplicates': 'error',
      'import-x/no-self-import': 'error',
      'import-x/newline-after-import': 'warn',
      'perfectionist/sort-imports': [
        'warn',
        {
          type: 'natural',
          newlinesBetween: 'always',
          internalPattern: ['^@/.*'],
          groups: [
            'builtin',
            'external',
            ['internal-type', 'internal'],
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'unknown'
          ]
        }
      ],
      'perfectionist/sort-named-imports': ['warn', { type: 'natural' }],
      'perfectionist/sort-jsx-props': [
        'warn',
        { type: 'natural', groups: ['shorthand', 'unknown', 'multiline'] }
      ]
    }
  }
];