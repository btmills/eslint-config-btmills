import { es2023 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2023',
	defineConfig({
		extends: [es2023],
	}),
	['./es2023.js'],
	import.meta.dirname,
);
