import { defineConfig } from 'eslint/config';
import pluginNode from 'eslint-plugin-n';
import globals from 'globals';

export default defineConfig({
	name: 'Node.js',

	plugins: {
		n: pluginNode,
	},

	languageOptions: {
		globals: globals.node,
	},

	rules: {
		'n/callback-return': 'off',
		'n/exports-style': 'off', // Covered by import/no-commonjs in base config
		'n/file-extension-in-import': 'off', // Covered by import/extensions in base config
		'n/global-require': 'off', // Not using CommonJS
		'n/handle-callback-err': 'off',
		'n/hashbang': 'error',
		'n/no-callback-literal': 'off',
		'n/no-deprecated-api': 'error',
		'n/no-exports-assign': 'off', // Not using CommonJS
		'n/no-extraneous-import': 'off', // Covered by import/no-extraneous-dependencies in base config
		'n/no-extraneous-require': 'off', // Not using CommonJS
		'n/no-hide-core-modules': 'off', // Deprecated
		'n/no-missing-import': 'off', // covered by import/no-unresolved in base config
		'n/no-missing-require': 'off', // Not using CommonJS
		'n/no-mixed-requires': 'off', // Not using CommonJS
		'n/no-new-require': 'off', // Not using CommonJS
		'n/no-path-concat': 'error',
		'n/no-process-env': 'error',
		'n/no-process-exit': 'error',
		'n/no-restricted-import': 'off', // Covered by import/no-restricted-paths in base config
		'n/no-restricted-require': 'off', // Not using CommonJS
		'n/no-unsupported-features/es-builtins': 'error',
		'n/no-unsupported-features/es-syntax': 'error',
		'n/no-unsupported-features/node-builtins': 'error',
		'n/prefer-global/buffer': 'error',
		'n/prefer-global/console': 'error',
		'n/prefer-global/process': 'error',
		'n/prefer-global/text-decoder': 'error',
		'n/prefer-global/text-encoder': 'error',
		'n/prefer-global/url': 'error',
		'n/prefer-global/url-search-params': 'error',
		'n/prefer-node-protocol': 'error',
		'n/prefer-promises/dns': 'error',
		'n/prefer-promises/fs': 'error',
		'n/shebang': 'off', // Deprecated
	},
});
