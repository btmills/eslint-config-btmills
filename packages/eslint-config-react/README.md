# @btmills/eslint-config-react

> My personal [ESLint](http://eslint.org) [shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```sh
npm install --save-dev eslint @btmills/eslint-config-js @btmills/eslint-config-react
```

## Usage

Add the following to your project's `eslint.config.ts`:

```ts
import { defineConfig } from 'eslint/config';

import { es2024 } from '@btmills/eslint-config-js';
import { react } from '@btmills/eslint-config-react';
// Optional:
import { browser } from '@btmills/eslint-config-js';

export default defineConfig({
	extends: [
		es2024, // Or any other ES version
		react,
		browser, // Optional
	],
	files: [
		// ...
	],
	// ...more config as needed
});
```

## License

MIT &copy; Brandon Mills
