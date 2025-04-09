import react from 'eslint-plugin-react'
import baseRules from './baseRules.js'
import reactRules from './reactRules.js'
import globals from 'globals'
export default [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    languageOptions: {
      globals: {
        React: true,
        JSX: true,
        TailwindColor: true,
        ...globals.browser,
      },
    },
    plugins: [react],
    rules: {
      ...baseRules,
      ...reactRules,
    },
  },
]
