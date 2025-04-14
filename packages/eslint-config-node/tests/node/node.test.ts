import { node } from '@btmills/eslint-config-node';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'node',
	defineConfig({
		extends: [node],
	}),
	['./node.js'],
	import.meta.dirname,
);
