import type { Linter } from 'eslint';

export const config: Linter.Config = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['**/*.{jsx,tsx}'],
      plugins: ['react', 'react-hooks'],
      rules: {
        // React rules: https://github.com/jsx-eslint/eslint-plugin-react
        'react/boolean-prop-naming': [
          'error',
          {
            // Ensures boolean props begin with 'is' or 'has'
            rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
            message: 'Boolean props should have the prefix is/has.',
            validateNested: true
          }
        ],
        'react/button-has-type': 'error',
        'react/destructuring-assignment': [
          'error',
          'always',
          { destructureInSignature: 'always' }
        ],
        'react/display-name': 'error',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
          }
        ],
        'react/hook-use-state': ['error', { allowDestructuredState: false }],
        'react/iframe-missing-sandbox': 'error',
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/jsx-fragments': 'error',
        'react/jsx-handler-names': 'error',
        'react/jsx-key': [
          'error',
          { checkFragmentShorthand: true, warnOnDuplicates: true }
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-leaked-render': [
          'error',
          { validStrategies: ['ternary'] }
        ],
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': [
          'error',
          { warnOnSpreadAttributes: true }
        ],
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/no-unknown-property': 'error',
        'react/no-unstable-nested-components': [
          'error',
          { allowAsProps: true }
        ],
        'react/self-closing-comp': ['error', { html: false }],

        // React Hooks rules: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        // Rules disabled by eslint-config-prettier
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-newline': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-multi-spaces': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-wrap-multilines': 'off',

        // Rules disabled by react/jsx-runtime plugin
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off'
      }
    },
    {
      files: ['**/*.{jsx,tsx}'],
      plugins: ['react-refresh'],
      rules: {
        // React Refresh rules: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
        'react-refresh/only-export-components': 'error'
      }
    },
    {
      files: ['**/*.tsx'],
      parser: '@typescript-eslint/parser'
    }
  ]
};
