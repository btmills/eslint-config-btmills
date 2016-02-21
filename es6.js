"use strict";

var merge = require("./merge");
var es5 = require("./es5");

module.exports = merge(es5, {
	"parserOptions": {
		"sourceType": "module"
	},

	"env": {
		"es6": true
	},

	"rules": {
		"no-class-assign": 2,
		"no-confusing-arrow": 2,
		"no-const-assign": 2,
		"no-dupe-class-members": 2,
		"no-iterator": 0,
		"no-new-symbol": 2,
		"no-this-before-super": 2,
		"no-useless-constructor": 2,
		"no-var": 2,

		"arrow-parens": 0,
		"arrow-spacing": 2,
		"computed-property-spacing": [0, "never"],
		"constructor-super": 2,
		"generator-star-spacing": 2,
		"object-shorthand": 2,
		"prefer-arrow-callback": 2,
		"prefer-const": 2,
		"prefer-rest-params": 2,
		"prefer-spread": 2,
		"prefer-reflect": 0,
		"prefer-template": 2,
		"template-curly-spacing": 2
	}
});
