module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'react-app',
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/jsx-props-no-spreading': 'warn',
    "react-hooks/exhaustive-deps": 'warn' ,
    'no-console': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
  },
};
