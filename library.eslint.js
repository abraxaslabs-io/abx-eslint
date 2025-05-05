import baseRules from './baseRules.eslint.js'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        BigInt: true,
      },
    },
    plugins: { js },
    extends: ['js/recommended'],
    rules: baseRules,
  },
]
