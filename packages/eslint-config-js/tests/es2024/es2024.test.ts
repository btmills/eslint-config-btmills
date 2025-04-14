import { es2024 } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'es2024',
	defineConfig({
		extends: [es2024],
	}),
	['./es2024.js'],
	import.meta.dirname,
);
