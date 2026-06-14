import tseslint from 'typescript-eslint';

import type { FlatConfig } from '../types.js';

export const typescript = (): FlatConfig[] => [
  ...(tseslint.configs.strictTypeChecked as FlatConfig[]),
  ...(tseslint.configs.stylisticTypeChecked as FlatConfig[]),
  {
    name: 'goty/typescript',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd()
      }
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } }
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true, allowBoolean: true }
      ]
    }
  },
  {
    name: 'goty/typescript-disable-for-js',
    files: ['**/*.{js,mjs,cjs}'],
    ...(tseslint.configs.disableTypeChecked as FlatConfig)
  }
];