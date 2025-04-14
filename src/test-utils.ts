import { relative } from 'node:path';
import test from 'node:test';

import { ESLint } from 'eslint';
import type { defineConfig } from 'eslint/config';

export default async function testLintSnapshot(
	label: string,
	config: ReturnType<typeof defineConfig>,
	files: Array<string>,
	cwd: string,
): Promise<void> {
	return test(label, async (t) => {
		const result = await new ESLint({
			cwd,
			overrideConfig: config,
			overrideConfigFile: true,
		}).lintFiles(files);
		const relativeResult = result.map(({ filePath, ...rest }) => ({
			filePath: relative(cwd, filePath),
			...rest,
		}));
		t.assert.snapshot(relativeResult);
	});
}
