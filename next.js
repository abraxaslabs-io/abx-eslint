import react from 'eslint-plugin-react'
import baseRules from './baseRules.js'
import reactRules from './reactRules.js'
import globals from 'globals'
import tailwind from 'eslint-plugin-tailwindcss'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...tailwind.configs['flat/recommended'],
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        React: true,
        JSX: true,
        TailwindColor: true,
        ...globals.browser,
      },
    },
    plugins: {
      react,
    },
    rules: {
      ...baseRules,
      ...reactRules,
    },
  },
]
