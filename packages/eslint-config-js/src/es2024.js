import { defineConfig } from 'eslint/config';

import es2023 from './es2023.js';

export default defineConfig({
	name: 'ES2024',
	extends: [es2023],

	languageOptions: {
		ecmaVersion: 2024,
	},

	rules: {
		'no-empty-static-block': 'error',
	},
});
