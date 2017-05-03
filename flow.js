"use strict";

module.exports = {
	"parser": "babel-eslint",

	"plugins": [
		"flowtype"
	],

	"rules": {
		"flowtype/no-dupe-keys": "error",
		"flowtype/no-primitive-constructor-types": "error",
		"flowtype/no-types-missing-file-annotation": "error",
		"flowtype/no-weak-types": "warn",

		"flowtype/boolean-style": "error",
		"flowtype/define-flow-type": "error",
		"flowtype/delimiter-dangle": "error",
		"flowtype/generic-spacing": "error",
		"flowtype/object-type-delimiter": "error",
		"flowtype/require-parameter-type": "off",
		"flowtype/require-return-type": "off",
		"flowtype/require-valid-file-annotation": ["error", "always", {
			"annotationStyle": "line"
		}],
		"flowtype/require-variable-type": "off",
		"flowtype/semi": "error",
		"flowtype/sort-keys": "error",
		"flowtype/space-after-type-colon": "error",
		"flowtype/space-before-generic-bracket": "error",
		"flowtype/space-before-type-colon": "error",
		"flowtype/type-id-match": "off",
		"flowtype/union-intersection-spacing": "error",
		"flowtype/use-flow-type": "error"
	}
};
