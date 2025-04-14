import { defineConfig } from 'eslint/config';

import es2017 from './es2017.js';

export default defineConfig({
	name: 'ES2018',
	extends: [es2017],

	languageOptions: {
		ecmaVersion: 2018,
	},

	rules: {
		'prefer-named-capture-group': 'off',
		'prefer-object-spread': 'warn',
	},
});
