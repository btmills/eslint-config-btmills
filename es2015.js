"use strict";

module.exports = {
	"extends": "./es5.js",

	"parserOptions": {
		"sourceType": "module"
	},

	"env": {
		"es6": true
	},

	"plugins": [
		"import"
	],

	"rules": {
		"no-class-assign": "error",
		"no-confusing-arrow": "off",
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": "off", // Covered by "import/no-duplicates"
		"no-iterator": "off",
		"no-new-symbol": "error",
		"no-template-curly-in-string": "error",
		"no-this-before-super": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-var": "error",

		"arrow-parens": "off",
		"arrow-spacing": "error",
		"class-methods-use-this": "error",
		"computed-property-spacing": ["off", "never"],
		"constructor-super": "error",
		"generator-star-spacing": "error",
		"object-shorthand": "error",
		"padding-line-between-statements": ["error", {
			"blankLine": "always",
			"prev": "import",
			"next": "*"
		}, {
			"blankLine": "any",
			"prev": "import",
			"next": "import"
		}],
		"prefer-arrow-callback": "error",
		"prefer-const": ["error", { "destructuring": "all" }],
		"prefer-promise-reject-errors": "off",
		"prefer-reflect": "off",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"rest-spread-spacing": "error",
		"require-yield": "error",
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",

		"import/no-absolute-path": "error",
		"import/no-amd": "error",
		"import/no-anonymous-default-export": "off",
		"import/no-commonjs": "error",
		"import/no-deprecated": "warn",
		"import/no-duplicates": "error",
		"import/no-dynamic-require": "error",
		"import/no-extraneous-dependencies": "error",
		"import/no-internal-modules": "off",
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",
		"import/no-named-default": "error",
		"import/no-namespace": "off",
		"import/no-nodejs-modules": "off",
		"import/no-restricted-paths": "off",
		"import/no-unassigned-imports": "off",
		"import/no-unresolved": "error",
		"import/no-webpack-loader-syntax": "error",

		"import/default": "error",
		"import/export": "error",
		"import/exports-last": "off",
		"import/extensions": "off",
		"import/first": "error",
		"import/named": "error",
		"import/namespace": "error",
		"import/newline-after-import": "error",
		"import/order": "off",
		"import/prefer-default-export": "off",
		"import/unambiguous": "off"
	}
};
