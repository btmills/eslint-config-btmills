import { defineConfig } from 'eslint/config';

import es2018 from './es2018.js';

export default defineConfig({
	name: 'ES2019',
	extends: [es2018],

	languageOptions: {
		ecmaVersion: 2019,
	},
});
