"use strict";

module.exports = {
	"extends": "./es2019.js",

	"env": {
		"es2020": true
	},

	"parserOptions": {
		"ecmaVersion": 2020
	},

	"rules": {
		"no-unsafe-optional-chaining": "error"
	}
};
