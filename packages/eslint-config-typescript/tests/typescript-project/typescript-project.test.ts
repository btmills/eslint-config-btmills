import { typescriptProject } from '@btmills/eslint-config-typescript';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'typescript-project',
	defineConfig({
		extends: [typescriptProject],
		files: ['./typescript-project.ts'],
	}),
	['./typescript-project.ts'],
	import.meta.dirname,
);
