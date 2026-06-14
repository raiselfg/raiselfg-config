import type { Linter } from 'eslint';

export interface EslintOptions {
  /** Включить правила TypeScript (type-checked). По умолчанию true */
  typescript?: boolean;
  /** Включить React + Hooks + JSX a11y. По умолчанию false */
  react?: boolean;
  /** Включить правила Next.js. По умолчанию false */
  nextjs?: boolean;
  /** Глобально игнорируемые пути */
  ignores?: string[];
}

export type FlatConfig = Linter.Config;