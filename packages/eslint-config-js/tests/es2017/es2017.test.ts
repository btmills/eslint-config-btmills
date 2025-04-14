import { es2017 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2017',
	defineConfig({
		extends: [es2017],
	}),
	['./es2017.js'],
	import.meta.dirname,
);
