import { defineConfig } from 'eslint/config';

import es2015 from './es2015.js';

export default defineConfig({
	name: 'ES2016',
	extends: [es2015],

	languageOptions: {
		ecmaVersion: 2016,
	},

	rules: {
		'prefer-exponentiation-operator': 'error',
	},
});
