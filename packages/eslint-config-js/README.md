# @btmills/eslint-config-js

> My personal [ESLint](http://eslint.org) [shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```sh
npm install --save-dev eslint @btmills/eslint-config-js
```

## Usage

Add the following to your project's `eslint.config.ts`:

```ts
import { defineConfig } from 'eslint/config';

// Pick one:
import { es5, es2015, /*...*/ es2024, latest } from '@btmills/eslint-config-js';

// Optional:
import { browser } from '@btmills/eslint-config-js';

export default defineConfig({
	extends: [
		es2024, // Or any other ES version
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
