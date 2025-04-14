import { es2020 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2020',
	defineConfig({
		extends: [es2020],
	}),
	['./es2020.js'],
	import.meta.dirname,
);
