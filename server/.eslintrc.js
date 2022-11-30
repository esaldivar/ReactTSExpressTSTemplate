module.exports = {
  extends: [
	  'airbnb-typescript',
	  'plugin:@typescript-eslint/recommended',
	  'plugin:prettier/recommended',
    "plugin:import/recommended"
	],
	plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: './tsconfig.json',
  },
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  rules: {
	  'linebreak-style': 'off',
    "quotes": [1, "double"],
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
	  'prettier/prettier': [
		'error',
		{
		  endOfLine: 'auto',
		},
	  ],
	},
};
