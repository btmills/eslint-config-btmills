import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig({
	name: 'TypeScript (Standalone)',

	extends: [
		// @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/8613
		tseslint.configs.base,
	],

	rules: {
		// Checked by compiler
		'no-undef': 'off',
		'import/default': 'off',
		'import/named': 'off',
		'import/namespace': 'off',
		'import/no-named-as-default-member': 'off',
		'import/no-unresolved': 'off',

		// Use `#` fields or the `private` keyword instead of underscores.
		'no-underscore-dangle': [
			'error',
			{
				enforceInClassFields: true,
				enforceInMethodNames: true,
			},
		],

		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': ['error', { default: 'generic' }],
		'@typescript-eslint/ban-ts-comment': 'error',
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/class-literal-property-style': 'off',
		'@typescript-eslint/consistent-generic-constructors': 'error',
		'@typescript-eslint/consistent-indexed-object-style': 'off',
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter',
			},
		],
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/method-signature-style': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-object-type': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off', // Covered by @typescript-eslint/no-non-null-assertion
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // Covered by @typescript-eslint/no-non-null-assertion
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-require-imports': 'off', // Covered by eslint-plugin-import/no-commonjs
		'@typescript-eslint/no-restricted-types': 'off',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off', // parameter-properties prevents parameter properties
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-unsafe-function-type': 'error',
		'@typescript-eslint/no-useless-empty-export': 'error',
		'@typescript-eslint/no-wrapper-object-types': 'error',
		'@typescript-eslint/parameter-properties': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-for-of': 'off',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'off', // Covered by @typescript-eslint/no-namespace
		'@typescript-eslint/sort-type-union-intersection-members': 'off',
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				lib: 'never',
				path: 'never',
				types: 'never',
			},
		],
		'@typescript-eslint/typedef': 'off',
		'@typescript-eslint/unified-signatures': [
			'error',
			{
				ignoreDifferentlyNamedParameters: true,
			},
		],

		// Extension rules

		'class-methods-use-this': 'off',
		'@typescript-eslint/class-methods-use-this': 'off', // Linting shouldn't influence API design

		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'error',

		'@typescript-eslint/init-declarations': 'off',

		'@typescript-eslint/max-params': 'off',

		'no-array-constructor': 'off',
		'@typescript-eslint/no-array-constructor': 'error',

		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',

		'@typescript-eslint/no-duplicate-imports': 'off', // Covered by import/no-duplicates

		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'error',

		'@typescript-eslint/no-extra-parens': 'off', // Covered by Prettier

		'@typescript-eslint/no-invalid-this': 'off',

		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'error',

		'@typescript-eslint/no-magic-numbers': 'off',

		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'off', // Checked by compiler

		'@typescript-eslint/no-restricted-imports': 'off',

		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',

		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',

		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ vars: 'all', args: 'after-used' },
		],

		'@typescript-eslint/no-use-before-define': 'off',

		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
	},
});
