import baseRules from './baseRules';
import reactRules from './reactRules';
import globals from 'globals';
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
    plugins: ['react'],
    rules: {
      ...baseRules,
      ...reactRules,
    },
  },
];
