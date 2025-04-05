# eslint-config-btmills

> My personal [ESLint](http://eslint.org) [shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```sh
npm install --save-dev eslint @btmills/eslint-config-btmills
```

If using ES6 modules, install [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import):

```sh
npm install --save-dev eslint-plugin-import
```

If using React, install [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks):

```sh
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

If using TypeScript, install [typescript-eslint](https://typescript-eslint.io/):

```sh
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Usage

Add one of the following lines to your project's `.eslintrc.js`:

```js
module.exports = {
	"extends": "@btmills/eslint-config-btmills", // Defaults to es5
	"extends": "@btmills/eslint-config-btmills/es5",
	"extends": "@btmills/eslint-config-btmills/es2015",
	"extends": "@btmills/eslint-config-btmills/es2016",
	"extends": "@btmills/eslint-config-btmills/es2017",
	"extends": "@btmills/eslint-config-btmills/es2018",
	"extends": "@btmills/eslint-config-btmills/es2019",
	"extends": "@btmills/eslint-config-btmills/es2020",
	"extends": "@btmills/eslint-config-btmills/es2021",
	"extends": "@btmills/eslint-config-btmills/es2022",

	// Use React with a language config by extending multiple configs
	"extends": [
		"@btmills/eslint-config-btmills/es2015",
		"@btmills/eslint-config-btmills/react",
	],

	// Use TypeScript
	"overrides": [
		{
			"files": ["**/*.ts{,x}"],
			"extends": ["@btmills/eslint-config-btmills/typescript"]
		},
		// Optionally include rules that require type information
		{
			"files": ["**/*.ts{,x}"],
			"extends": ["@btmills/eslint-config-btmills/typescript-project"],
			"parserOptions": {
				"project": "./tsconfig.json"
			}
		}
	]
};
```

## License

MIT &copy; Brandon Mills
