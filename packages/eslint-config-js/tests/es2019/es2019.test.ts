import { es2019 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2019',
	defineConfig({
		extends: [es2019],
	}),
	['./es2019.js'],
	import.meta.dirname,
);
