import { defineConfig } from 'eslint/config';

import es2020 from './es2020.js';

export default defineConfig({
	name: 'ES2021',
	extends: [es2020],

	languageOptions: {
		ecmaVersion: 2021,
	},

	rules: {
		'logical-assignment-operators': 'off',
	},
});
