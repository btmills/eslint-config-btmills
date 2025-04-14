import { es2022 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2022',
	defineConfig({
		extends: [es2022],
	}),
	['./es2022.js'],
	import.meta.dirname,
);
