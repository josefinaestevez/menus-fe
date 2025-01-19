import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Target all files with these extensions: js, mjs, cjs, ts, and vue
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
  },
  {
    languageOptions: {
      // Define global variables for the browser environment
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    // Vue-specific configuration
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        // Use TypeScript parser for Vue files
        parser: tseslint.parser,
      },
    },
  },
  {
    // Configure Prettier plugin
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Enforce Prettier rules
      'prettier/prettier': ['error', { semi: true }],
    },
  },
  // Include Prettier config to disable conflicting rules
  eslintConfigPrettier,
  {
    rules: {
      // Enforce semicolons in the code
      semi: ['error', 'always'],
    },
  },
  {
    // Ignore the .nuxt/ folder
    ignores: ['.nuxt/'],
  },
];
