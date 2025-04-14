# @btmills/eslint-config-typescript

> My personal [ESLint](http://eslint.org) [shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```sh
npm install --save-dev eslint @btmills/eslint-config-js @btmills/eslint-config-typescript
```

## Usage

Add the following to your project's `eslint.config.ts`:

```ts
import { defineConfig } from 'eslint/config';

import { es2024 } from '@btmills/eslint-config-js';
import {
	typescript,
	typescriptProject,
} from '@btmills/eslint-config-typescript';

export default defineConfig([
	// Start here
	{
		name: 'TypeScript (without type checking)',
		extends: [
			es2024, // Or any other ES version
			typescript,
		],
		files: [
			// ...
		],
		// ...more config as needed
	},

	// Optional
	{
		name: 'TypeScript (with type checking)',
		extends: [typescriptProject],
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
		},
		files: [
			// ...
		],
		// ...more config as needed
	},
]);
```

## License

MIT &copy; Brandon Mills
