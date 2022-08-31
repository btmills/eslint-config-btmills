"use strict";

module.exports = {
	"extends": "./es2021.js",

	"env": {
		"es2022": true
	},

	"parserOptions": {
		"ecmaVersion": 2022
	},

	"rules": {
		// Use `#private` names instead of the underscore convention.
		"no-underscore-dangle": ["error", {
			"enforceInClassFields": true,
			"enforceInMethodNames": true
		}],
		"no-unused-private-class-members": "error",

		"prefer-object-has-own": "error"
	}
};
