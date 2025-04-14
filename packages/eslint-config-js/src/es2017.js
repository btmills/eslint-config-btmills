import { defineConfig } from 'eslint/config';

import es2016 from './es2016.js';

export default defineConfig({
	name: 'ES2017',
	extends: [es2016],

	languageOptions: {
		ecmaVersion: 2017,
	},

	rules: {
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',

		'require-await': 'error',
	},
});
