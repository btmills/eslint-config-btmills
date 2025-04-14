import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

import es5 from './es5.js';

export default defineConfig({
	name: 'ES2015',
	extends: [es5],

	languageOptions: {
		ecmaVersion: 2015,
		sourceType: 'module',
	},

	plugins: {
		import: importPlugin,
	},

	settings: {
		'import/resolver': {
			node: {},
		},
	},

	rules: {
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-constructor-return': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'off', // Covered by "import/no-duplicates"
		'no-empty-pattern': 'off',
		'no-import-assign': 'error',
		'no-new-native-nonconstructor': 'error',
		'no-promise-executor-return': 'error',
		'no-restricted-exports': 'off',
		'no-restricted-imports': 'off',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',

		'arrow-body-style': 'off',
		'class-methods-use-this': 'off', // Linting shouldn't influence API design
		'constructor-super': 'error',
		'default-param-last': 'error',
		'max-classes-per-file': 'off',
		'object-shorthand': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
		'prefer-destructuring': 'off',
		'prefer-promise-reject-errors': 'off',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-atomic-updates': 'error',
		'require-unicode-regexp': 'warn',
		'require-yield': 'error',
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],
		'symbol-description': 'error',

		'import/no-absolute-path': 'error',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': 'off',
		'import/no-commonjs': 'error',
		'import/no-cycle': 'off',
		'import/no-deprecated': 'warn',
		'import/no-default-export': 'off',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'error',
		'import/no-empty-named-blocks': 'error',
		'import/no-extraneous-dependencies': 'error',
		'import/no-import-module-exports': 'off',
		'import/no-internal-modules': 'off',
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-default': 'error',
		'import/no-named-export': 'off',
		'import/no-namespace': 'off',
		'import/no-nodejs-modules': 'off',
		'import/no-relative-packages': 'off',
		'import/no-relative-parent-imports': 'off',
		'import/no-restricted-paths': 'off',
		'import/no-self-import': 'error',
		'import/no-unassigned-import': 'off',
		'import/no-unresolved': 'error',
		'import/no-unused-modules': 'off',
		'import/no-useless-path-segments': 'off',
		'import/no-webpack-loader-syntax': 'error',

		'import/consistent-type-specifier-style': 'off',
		'import/dynamic-import-chunkname': 'off',
		'import/default': 'error',
		'import/export': 'error',
		'import/exports-last': 'off',
		'import/extensions': 'off',
		'import/first': 'error',
		'import/group-exports': 'off',
		'import/max-dependencies': 'off',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/newline-after-import': 'off',
		'import/order': [
			'error',
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc',
				},
				'newlines-between': 'always',
			},
		],
		'import/prefer-default-export': 'off',
		'import/unambiguous': 'off',
	},
});
