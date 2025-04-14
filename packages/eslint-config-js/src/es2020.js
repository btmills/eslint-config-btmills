import { defineConfig } from 'eslint/config';

import es2019 from './es2019.js';

export default defineConfig({
	name: 'ES2020',
	extends: [es2019],

	languageOptions: {
		ecmaVersion: 2020,
	},

	rules: {
		'no-unsafe-optional-chaining': 'error',
	},
});
