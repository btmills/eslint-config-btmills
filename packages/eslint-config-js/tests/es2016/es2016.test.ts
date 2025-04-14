import { es2016 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2016',
	defineConfig({
		extends: [es2016],
	}),
	['./es2016.js'],
	import.meta.dirname,
);
