const path = require("path");

module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        caughtErrors: "none",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json", "./packages/**/tsconfig.json"],
      },
    },
    {
      files: ["packages/react-app/**/*.ts?(x)", "packages/react-app/**/*.js?(x)"],
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
      rules: {
        "react/react-in-jsx-scope": "off",
      },
      settings: {
        "import/resolver": {
          typescript: {
            project: path.resolve(`${__dirname}/packages/react-app/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ["packages/nestjs/**/*.ts?(x)", "packages/nestjs/**/*.js?(x)"],
      settings: {
        "import/resolver": {
          typescript: {
            project: path.resolve(`${__dirname}/packages/nestjs/tsconfig.json`),
          },
        },
      },
    },
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", "spec.js"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts", ".js", ".jsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
