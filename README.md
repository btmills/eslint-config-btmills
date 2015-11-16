# eslint-config-btmills

> My personal [ESLint](http://eslint.org) [shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```sh
$ npm install --save-dev eslint @btmills/eslint-config-btmills
```

If using React, also install [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react):

```sh
$ npm install --save-dev eslint-plugin-react
```

## Usage

Add one of the following lines to your project's `.eslintrc`:

```js
{
	"extends": "@btmills/eslint-config-btmills",
	"extends": "@btmills/eslint-config-btmills/es5",
	"extends": "@btmills/eslint-config-btmills/es6",
	"extends": "@btmills/eslint-config-btmills/react"
}
```

## License

MIT &copy; Brandon Mills
