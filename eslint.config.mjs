import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      '**/node_modules',
      '**/*.log*',
      '**/.nuxt',
      '**/.nitro',
      '**/.cache',
      '**/.output',
      '**/.env',
      '**/dist',
      '**/build/',
      '**/public/',
      '**/static/',
      '**/stories/',
      'static/robots.txt',
    ],
  },
  ...compat.extends('plugin:vue/vue3-essential', 'prettier'),
  {
    plugins: {
      vue,
      prettier,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/component-definition-name-casing': ['error', 'kebab-case'],
      'vue/no-v-html': 0,
      'vue/max-attributes-per-line': 'off',
      'comma-dangle': 0,
      'no-undef': 0,
      'vue/valid-v-for': 0,
      'vue/no-side-effects-in-computed-properties': 0,
      'array-callback-return': 0,
      'no-prototype-builtins': 0,
      'new-cap': 0,
      'import/first': 0,
      'vue/no-setup-props-destructure': 0,
    },

    files: ['**/*.js', '**/*.vue', '**/*.ts'],
  },
]
