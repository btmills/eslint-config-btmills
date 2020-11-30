"use strict";

module.exports = {
	"extends": "./es2016.js",

	"env": {
		"es2017": true
	},

	"parserOptions": {
		"ecmaVersion": 2017
	},

	"rules": {
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-return-await": "error",

		"require-await": "error"
	}
};
