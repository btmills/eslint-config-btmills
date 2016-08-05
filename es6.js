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
		"no-class-assign": 2,
		"no-confusing-arrow": 0,
		"no-const-assign": 2,
		"no-dupe-class-members": 2,
		"no-duplicate-imports": 2,
		"no-iterator": 0,
		"no-new-symbol": 2,
		"no-this-before-super": 2,
		"no-useless-computed-key": 2,
		"no-useless-constructor": 2,
		"no-var": 2,

		"arrow-parens": 0,
		"arrow-spacing": 2,
		"computed-property-spacing": [0, "never"],
		"constructor-super": 2,
		"generator-star-spacing": 2,
		"newline-after-var": 0,
		"object-shorthand": 2,
		"prefer-arrow-callback": 2,
		"prefer-const": 2,
		"prefer-rest-params": 2,
		"prefer-spread": 2,
		"prefer-reflect": 0,
		"prefer-template": 2,
		"rest-spread-spacing": 2,
		"require-yield": 2,
		"template-curly-spacing": 2,

		"import/no-amd": 2,
		"import/no-commonjs": 2,
		"import/no-deprecated": 1,
		"import/no-duplicates": 2,
		"import/no-extraneous-dependencies": 2,
		"import/no-mutable-exports": 2,
		"import/no-named-as-default": 2,
		"import/no-named-as-default-member": 2,
		"import/no-namespace": 0,
		"import/no-nodejs-modules": 0,
		"import/no-restricted-paths": 0,
		"import/no-unresolved": 2,

		"import/default": 2,
		"import/export": 2,
		"import/extensions": 0,
		"import/imports-first": 2,
		"import/named": 2,
		"import/namespace": 2,
		"import/newline-after-import": 2,
		"import/order": 0,
		"import/prefer-default-export": 1
	}
};
