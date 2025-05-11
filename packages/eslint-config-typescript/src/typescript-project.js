import { defineConfig } from 'eslint/config';

import typescript from './typescript.js';

export default defineConfig({
	name: 'TypeScript (Type-Aware)',

	extends: [typescript],

	languageOptions: {
		parserOptions: {
			projectService: true,
		},
	},

	rules: {
		'import/no-unresolved': 'off', // Covered by type checker

		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/consistent-type-exports': [
			'error',
			{ fixMixedExportsWithInlineTypeSpecifier: true },
		],
		'@typescript-eslint/no-array-delete': 'error',
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-confusing-void-expression': 'error',
		'@typescript-eslint/no-deprecated': 'warn',
		'@typescript-eslint/no-duplicate-type-constituents': 'error',
		'@typescript-eslint/no-floating-promises': [
			'error',
			{ ignoreVoid: false, ignoreIIFE: false },
		],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-import-type-side-effects': 'error',
		'@typescript-eslint/no-meaningless-void-operator': 'error',
		'@typescript-eslint/no-misused-promises': 'error',
		'@typescript-eslint/no-misused-spread': 'error',
		'@typescript-eslint/no-mixed-enums': 'off',
		'@typescript-eslint/no-redundant-type-constituents': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'off',
		'@typescript-eslint/no-unnecessary-qualifier': 'off',
		'@typescript-eslint/no-unnecessary-template-expression': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unnecessary-type-conversion': 'error',
		'@typescript-eslint/no-unnecessary-type-parameters': 'error',
		'@typescript-eslint/no-unsafe-argument': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'error',
		'@typescript-eslint/no-unsafe-call': 'error',
		'@typescript-eslint/no-unsafe-declaration-merging': 'error',
		'@typescript-eslint/no-unsafe-enum-comparison': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'error',
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/no-unsafe-type-assertion': 'error',
		'@typescript-eslint/no-unsafe-unary-minus': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/prefer-find': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'error',
		'@typescript-eslint/prefer-return-this-type': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/related-getter-setter-pairs': 'error',
		'@typescript-eslint/require-array-sort-compare': 'off',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/restrict-template-expressions': 'error',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/switch-exhaustiveness-check': [
			'error',
			{
				considerDefaultExhaustiveForUnions: true,
			},
		],
		'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
		'@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

		// Extension rules

		'consistent-return': 'off', // Covered by `noImplicitReturns`
		'@typescript-eslint/consistent-return': 'off', // Covered by tsconfig.json noImplicitReturns

		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': [
			'error',
			{
				allowKeywords: true,
			},
		],

		'no-implied-eval': 'off',
		'@typescript-eslint/no-implied-eval': 'error',

		'@typescript-eslint/return-await': 'error',

		'no-throw-literal': 'off',
		'@typescript-eslint/only-throw-error': 'error',

		'@typescript-eslint/prefer-destructuring': 'off',
		'@typescript-eslint/prefer-promise-reject-errors': 'off',

		'require-await': 'off',
		'@typescript-eslint/require-await': 'error',
	},
});
