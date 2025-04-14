import { es5 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es5',
	defineConfig({
		extends: [es5],
	}),
	['./es5.js'],
	import.meta.dirname,
);
