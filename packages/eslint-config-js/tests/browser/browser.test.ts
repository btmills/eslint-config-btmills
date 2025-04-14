import { browser, latest } from '@btmills/eslint-config-js';
import { defineConfig } from 'eslint/config';

import testLintSnapshot from '../../../../src/test-utils.ts';

void testLintSnapshot(
	'browser',
	defineConfig({
		extends: [latest, browser],
	}),
	['./browser.js'],
	import.meta.dirname,
);
