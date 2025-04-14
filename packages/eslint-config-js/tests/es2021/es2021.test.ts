import { es2021 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2021',
	defineConfig({
		extends: [es2021],
	}),
	['./es2021.js'],
	import.meta.dirname,
);
