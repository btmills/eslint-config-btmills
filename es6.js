var deepAssign = require("deep-assign");

var es5 = require("./es5");

module.exports = deepAssign({}, es5, {
	"ecmaFeatures": {
		"modules": true
	},

	"env": {
		"es6": true
	},

	"rules": {
		"no-class-assign": 2,
		"no-const-assign": 2,
		"no-dupe-class-members": 2,
		"no-iterator": 0,
		"no-this-before-super": 2,
		"no-var": 2,

		"arrow-parens": 0,
		"arrow-spacing": 2,
		"computed-property-spacing": [0, "never"],
		"constructor-super": 2,
		"generator-star-spacing": 2,
		"object-shorthand": 2,
		"prefer-arrow-callback": 2,
		"prefer-const": 2,
		"prefer-spread": 2,
		"prefer-reflect": 2,
		"prefer-template": 2
	}
});
