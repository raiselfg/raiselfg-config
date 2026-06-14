import next from '@next/eslint-plugin-next';

import type { FlatConfig } from '../types.js';

export const nextjs = (): FlatConfig[] => [
  {
    name: 'goty/nextjs',
    plugins: { '@next/next': next },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules
    }
  },
  {
    name: 'goty/nextjs-og',
    files: ['**/opengraph-image.tsx', '**/icon.tsx', '**/apple-icon.tsx'],
    rules: { '@next/next/no-img-element': 'off' }
  }
];