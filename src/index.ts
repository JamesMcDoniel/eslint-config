import type { Linter } from 'eslint';

export const config: Linter.Config = {
  extends: ['./baseConfig', './typescript.ts', './testing.ts']
};
