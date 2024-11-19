module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
     "plugin:import/errors", "plugin:import/warnings"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-param-reassign': ['off'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/destructuring-assignment': ['off'],
    'react/function-component-definition': ['off'],
    'react/prop-types': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/no-unescaped-entities': ['off'],
    'import/prefer-default-export': ['off'],
    'react/require-default-props': ['off'],
    'no-restricted-exports': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'react/no-array-index-key': ['off'],
    'consistent-return': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx']
      }
    ],
    'import/extensions': ['off']
  },
  ignorePatterns: ['public', 'src/__generated__', 'vite.config.ts']
};
