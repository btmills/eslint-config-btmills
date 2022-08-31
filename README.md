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

If using [Flow](https://flow.org), install [babel-eslint](https://github.com/babel/babel-eslint) and [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype):

```sh
$ npm install --save-dev babel-eslint eslint-plugin-flowtype
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

	// Use React with a language config by extending multiple configs
	"extends": [
		"@btmills/eslint-config-btmills/es2015",
		"@btmills/eslint-config-btmills/react",
	]
};
```

## License

MIT &copy; Brandon Mills
