import { defineConfig } from 'eslint/config';

import es2022 from './es2022.js';

export default defineConfig({
	name: 'ES2023',
	extends: [es2022],

	languageOptions: {
		ecmaVersion: 2023,
	},

	rules: {
		'no-empty-static-block': 'error',
	},
});
