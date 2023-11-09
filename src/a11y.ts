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
      plugins: ['jsx-a11y'],
      rules: {
        // JSX-A11y plugin rules: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/autocomplete-valid': 'error',
        'jsx-a11y/control-has-associated-label': 'error',
        'jsx-a11y/heading-has-content': 'error',
        'jsx-a11y/iframe-has-title': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-aria-hidden-on-focusable': 'error',
        'jsx-a11y/no-autofocus': 'error',
        'jsx-a11y/no-distracting-elements': 'error',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
        'jsx-a11y/no-noninteractive-element-interactions': [
          'error',
          {
            handlers: [
              'onClick',
              'onMouseDown',
              'onMouseUp',
              'onKeyPress',
              'onKeyDown',
              'onKeyUp'
            ]
          }
        ],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
          'error',
          {
            ul: [
              'listbox',
              'menu',
              'menubar',
              'radiogroup',
              'tablist',
              'tree',
              'treegrid'
            ],
            ol: [
              'listbox',
              'menu',
              'menubar',
              'radiogroup',
              'tablist',
              'tree',
              'treegrid'
            ],
            li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
            table: ['grid'],
            td: ['gridcell']
          }
        ],
        'jsx-a11y/no-noninteractive-tabindex': [
          'error',
          {
            tags: [],
            roles: ['tabpanel']
          }
        ],
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/no-static-element-interactions': [
          'error',
          {
            handlers: [
              'onClick',
              'onMouseDown',
              'onMouseUp',
              'onKeyPress',
              'onKeyDown',
              'onKeyUp'
            ]
          }
        ],
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/scope': 'error',
        'jsx-a11y/tabindex-no-positive': 'error',

        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/interactive-supports-focus': 'error',
        'jsx-a11y/media-has-caption': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error'
      }
    },
    {
      files: ['**/*.tsx'],
      parser: '@typescript-eslint/parser'
    }
  ]
};
