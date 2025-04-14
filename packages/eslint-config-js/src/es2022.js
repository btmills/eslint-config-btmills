import { defineConfig } from 'eslint/config';

import es2021 from './es2021.js';

export default defineConfig({
	name: 'ES2022',
	extends: [es2021],

	languageOptions: {
		ecmaVersion: 2022,
	},

	rules: {
		// Use `#private` names instead of the underscore convention.
		'no-underscore-dangle': [
			'error',
			{
				enforceInClassFields: true,
				enforceInMethodNames: true,
			},
		],
		'no-unused-private-class-members': 'error',

		'prefer-object-has-own': 'error',
	},
});
