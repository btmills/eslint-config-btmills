import { es2018 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2018',
	defineConfig({
		extends: [es2018],
	}),
	['./es2018.js'],
	import.meta.dirname,
);
