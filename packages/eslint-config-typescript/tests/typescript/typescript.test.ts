import { typescript } from '@btmills/eslint-config-typescript';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'typescript',
	defineConfig({
		extends: [typescript],
		files: ['./typescript.ts'],
	}),
	['./typescript.ts'],
	import.meta.dirname,
);
