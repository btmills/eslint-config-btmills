import { react } from '@btmills/eslint-config-react';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'react',
	defineConfig({
		extends: [react],
	}),
	['./react.js'],
	import.meta.dirname,
);
