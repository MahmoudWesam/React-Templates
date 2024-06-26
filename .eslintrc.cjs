module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "react-app",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:sonarjs/recommended-legacy",
    "plugin:jsx-a11y/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-refresh",
    "react-hooks",
    "sonarjs",
    "prefer-arrow-functions",
    // "filename-rules"
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prefer-stateless-function": 1,
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-use-before-define": "off",
    "no-param-reassign": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/no-default-export": "error",
    "react-refresh/only-export-components": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // "jsx-a11y/rule-name": 2,
    // "filename-rules/match": [2, "PascalCase"],
    // "filename-rules/not-match": [2, "camelCase"],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "react-app",
        // "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: "module",
      },
      rules: {
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_.*", varsIgnorePattern: "^_.*" }],
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
          },
        ],
      },
      settings: { react: { version: "detect" } },
    },
    {
      // override for storybook
      files: ["*.{stories,story}.{ts,tsx}"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "import/no-default-export": "off",
        "jsdoc/require-jsdoc": "off",
      },
    },
  ],
}
