import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig({
	name: 'Browser',
	languageOptions: {
		globals: globals.browser,
	},
});
