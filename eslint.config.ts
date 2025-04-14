import { latest } from '@btmills/eslint-config-js';
import { node } from '@btmills/eslint-config-node';
import { typescriptProject } from '@btmills/eslint-config-typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig(
	{
		name: 'Test fixtures',
		ignores: [
			'packages/*/tests/**/*.{j,t}s',
			'!packages/*/tests/**/*.test.{j,t}s',
		],
	},
	{
		name: 'JavaScript',
		files: [
			'*/*.{j,t}s',
			'src/**/*.{j,t}s',
			'packages/*/*.{j,t}s',
			'packages/*/src/**/*.{j,t}s',
			'packages/*/tests/*/*.test.{j,t}s',
		],
		extends: [latest, node],
		settings: {
			'import/resolver': {
				typescript: {},
			},
		},
	},
	{
		name: 'TypeScript',
		files: [
			'*/*.ts',
			'src/**/*.ts',
			'packages/*/*.ts',
			'packages/*/src/**/*.ts',
			'packages/*/tests/*/*.test.ts',
		],
		extends: [typescriptProject],
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		name: 'Tests',
		files: ['packages/*/tests/*/*.test.ts'],
		rules: {
			'@typescript-eslint/no-floating-promises': [
				'error',
				{
					allowForKnownSafeCalls: [
						{
							from: 'package',
							name: 'test',
							package: 'node:test',
						},
					],
				},
			],
		},
	},
);
