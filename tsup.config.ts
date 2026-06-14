import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/eslint/index.ts', 'src/prettier/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: false
});