# eslint-config

My personal hand-picked rules for ESLint.

<br />

These rules span the following plugins:

- [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint)
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [`eslint-plugin-react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
- [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)
- [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest)

Along with an optional, separate config for [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).

<br />
<hr />

The rules from `eslint-plugin-jsx-a11y` currently don't apply to components created using `styled-components`.

<hr />
<br />

## Installation

Install the package as a dev dependency:

```
npm install --save-dev @jamesmcdoniel/eslint-config
```

<br />

You can install the required peer dependencies packages by using the following:

```
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-testing-library eslint-plugin-vitest
```

<br />

or, if you use `install-peerdeps`, you can use the following command:

```
npx install-peerdeps --dev @jamesmcdoniel/eslint-config
```

## Usage

Inside of your `.eslintrc.*` file, add the following to the `"extends":` property to use the `default` setup:

```json
{
  "extends": ["@jamesmcdoniel"]
}
```

<br />

There is also the option to seperately use any of the individual configs that, combined, form the default setup.

The following are the available options:

```json
{
  "extends": [
    "@jamesmcdoniel/eslint-config/base",
    "@jamesmcdoniel/eslint-config/typescript",
    "@jamesmcdoniel/eslint-config/react",
    "@jamesmcdoniel/eslint-config/testing",
    "@jamesmcdoniel/eslint-config/a11y"
  ]
}
```

<br />

The `a11y` config is not included in the `default` setup and must be manually added if you want to use it.

```json
{
  "extends": ["@jamesmcdoniel", "@jamesmcdoniel/eslint-config/a11y"]
}
```
