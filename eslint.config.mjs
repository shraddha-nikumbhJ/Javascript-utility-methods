import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      ecmaVersion: "latest",

      globals: globals.browser,

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      prettier: prettierPlugin
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      "react/react-in-jsx-scope": "off"
    },

    settings: {
      react: {
        version: "detect"
      }
    }
  },

  {
    files: ["webpack.config.js"],

    languageOptions: {
      globals: globals.node
    },

    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  }
];
