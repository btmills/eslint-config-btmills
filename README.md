# eslint-config-btmills

> My personal [ESLint](http://eslint.org) [shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```sh
$ npm install --save-dev eslint @btmills/eslint-config-btmills
```

If using ES6 modules, install [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import):

```sh
$ npm install --save-dev eslint-plugin-import
```

If using React, install [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react):

```sh
$ npm install --save-dev eslint-plugin-react
```

## Usage

Add one of the following lines to your project's `.eslintrc.js`:

```js
module.exports = {
	"extends": "@btmills/eslint-config-btmills", // Same as es5
	"extends": "@btmills/eslint-config-btmills/es5",
	"extends": "@btmills/eslint-config-btmills/es6",

	// Use React with a language config by extending both
	"extends": [
		"extends": "@btmills/eslint-config-btmills/es6",
		"@btmills/eslint-config-btmills/react"
	]
};
```

## License

MIT &copy; Brandon Mills
