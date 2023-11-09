import type { Linter } from 'eslint';

export const config: Linter.Config = {
  root: true,
  env: {
    browser: true
  },
  settings: {
    'testing-library/utils-module': 'off',
    'testing-library/custom-renders': 'off',
    'testing-library/custom-queries': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/**/*.{js,ts,jsx,tsx}',
        '**/*.{spec,test}.{js,ts,jsx,tsx}'
      ],
      plugins: ['vitest', 'testing-library'],
      rules: {
        // Vitest plugin rules: https://github.com/veritem/eslint-plugin-vitest
        'vitest/expect-expect': 'error',
        'vitest/no-alias-methods': 'error',
        'vitest/no-commented-out-tests': 'error',
        'vitest/no-conditional-expect': 'error',
        'vitest/no-conditional-in-test': 'error',
        'vitest/no-disabled-tests': 'error',
        'vitest/no-done-callback': 'error',
        'vitest/no-duplicate-hooks': 'error',
        'vitest/no-focused-tests': 'error',
        'vitest/no-identical-title': 'error',
        'vitest/no-interpolation-in-snapshots': 'error',
        'vitest/no-standalone-expect': 'error',
        'vitest/no-test-prefixes': 'error',
        'vitest/no-test-return-statement': 'error',
        'vitest/prefer-hooks-in-order': 'error',
        'vitest/prefer-hooks-on-top': 'error',
        'vitest/require-top-level-describe': 'error',
        'vitest/valid-describe-callback': 'error',
        'vitest/valid-expect': 'error',
        'vitest/valid-title': 'error',

        // Testing-Library plugin rules: https://github.com/testing-library/eslint-plugin-testing-library
        'testing-library/await-async-events': 'error',
        'testing-library/await-async-queries': 'error',
        'testing-library/await-async-utils': 'error',
        'testing-library/no-await-sync-events': 'error',
        'testing-library/no-await-sync-queries': 'error',
        'testing-library/no-container': 'error',
        'testing-library/no-dom-import': ['error', 'react'],
        'testing-library/no-global-regexp-flag-in-query': 'error',
        'testing-library/no-manual-cleanup': 'error',
        'testing-library/no-node-access': 'error',
        'testing-library/no-promise-in-fire-event': 'error',
        'testing-library/no-render-in-lifecycle': 'error',
        'testing-library/no-unnecessary-act': 'error',
        'testing-library/no-wait-for-multiple-assertions': 'error',
        'testing-library/no-wait-for-side-effects': 'error',
        'testing-library/no-wait-for-snapshot': 'error',
        'testing-library/prefer-explicit-assert': 'error',
        'testing-library/prefer-find-by': 'error',
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-query-by-disappearance': 'error',
        'testing-library/prefer-screen-queries': 'error',
        'testing-library/prefer-user-event': 'error',
        'testing-library/render-result-naming-convention': 'error'
      }
    },
    {
      files: ['**/__tests__/**.*.{ts,tsx}', '**/*.{spec,test}.{ts,tsx}'],
      parser: '@typescript-eslint/parser'
    }
  ]
};
