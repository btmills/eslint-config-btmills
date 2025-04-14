import { es2015 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2015',
	defineConfig({
		extends: [es2015],
	}),
	['./es2015.js'],
	import.meta.dirname,
);
