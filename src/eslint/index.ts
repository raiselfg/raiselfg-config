import type { EslintOptions, FlatConfig } from './types.js';

import { base } from './configs/base.js';
import { typescript } from './configs/typescript.js';
import { reactConfig } from './configs/react.js';
import { nextjs } from './configs/nextjs.js';
import { imports } from './configs/imports.js';
import { prettier } from './configs/prettier.js';

export const eslint = (
  options: EslintOptions = {},
  ...userConfigs: FlatConfig[]
): FlatConfig[] => {
  const {
    typescript: ts = true,
    react = false,
    nextjs: next = false,
    ignores = []
  } = options;

  const configs: FlatConfig[] = [
    {
      name: 'goty/ignores',
      ignores: [
        '.next/**',
        'out/**',
        'build/**',
        'dist/**',
        'coverage/**',
        'next-env.d.ts',
        ...ignores
      ]
    },
    ...base()
  ];

  if (ts) configs.push(...typescript());
  if (react) configs.push(...reactConfig());
  if (next) configs.push(...nextjs());

  configs.push(...imports());

  // пользовательские оверрайды — перед финальным prettier
  configs.push(...userConfigs);

  // prettier всегда последним
  configs.push(...prettier());

  return configs;
};

export type { EslintOptions, FlatConfig };
export default eslint;