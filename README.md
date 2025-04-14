# @btmills/eslint-config

> My personal [ESLint](http://eslint.org) [shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```sh
npm install --save-dev eslint @btmills/eslint-config-js
```

If using Node, React, or TypeScript, install `@btmills/eslint-config-node`:

```sh
npm install --save-dev @btmills/eslint-config-node
```

If using React, install `@btmills/eslint-config-react`:

```sh
npm install --save-dev @btmills/eslint-config-react
```

If using TypeScript, install `@btmills/eslint-config-typescript`:

```sh
npm install --save-dev @btmills/eslint-config-typescript
```

## Usage

Add the following to your project's `eslint.config.ts`:

```ts
import { defineConfig } from 'eslint/config';

// Pick one:
import { es5, es2015, /*...*/ es2024, latest } from '@btmills/eslint-config-js';

// Optional:
import { browser } from '@btmills/eslint-config-js';
import { node } from '@btmills/eslint-config-react-node';
import { react } from '@btmills/eslint-config-react';
import {
	typescript,
	typescriptProject,
} from '@btmills/eslint-config-typescript';

export default defineConfig([
	// Start here
	{
		name: 'JavaScript',
		// Pick one:
		extends: [es5, es2015, /*...*/ es2024, latest],
		files: [
			// ...
		],
		// ...more config as needed
	},

	// Optional
	{
		name: 'Browser',
		extends: [browser],
		files: [
			// ...
		],
		// ...more config as needed
	},

	// Optional
	{
		name: 'Node',
		extends: [node],
		files: [
			// ...
		],
		// ...more config as needed
	},

	// Optional
	{
		name: 'React',
		extends: [react],
		files: [
			// ...
		],
		// ...more config as needed
	},

	// Optional
	{
		name: 'TypeScript',
		extends: [typescript],
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
