declare module 'eslint-plugin-import' {
	// Copied from the official types that will come in the next release:
	// https://github.com/import-js/eslint-plugin-import/blob/4f145a2c64af4931f4bf3ae951c8b719b544718f/index.d.ts
	import type { ESLint, Linter, Rule } from 'eslint';

	const plugin: ESLint.Plugin & {
		meta: {
			name: string;
			version: string;
		};
		configs: {
			recommended: Linter.LegacyConfig;
			errors: Linter.LegacyConfig;
			warnings: Linter.LegacyConfig;
			'stage-0': Linter.LegacyConfig;
			react: Linter.LegacyConfig;
			'react-native': Linter.LegacyConfig;
			electron: Linter.LegacyConfig;
			typescript: Linter.LegacyConfig;
		};
		flatConfigs: {
			recommended: Linter.Config;
			errors: Linter.Config;
			warnings: Linter.Config;
			'stage-0': Linter.Config;
			react: Linter.Config;
			'react-native': Linter.Config;
			electron: Linter.Config;
			typescript: Linter.Config;
		};
		rules: {
			[key: string]: Rule.RuleModule;
		};
	};

	export default plugin;
}
