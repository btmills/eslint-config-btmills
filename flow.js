"use strict";

module.exports = {
	"parser": "babel-eslint",

	"plugins": [
		"flowtype"
	],

	"rules": {
		"flowtype/no-dupe-keys": "error",
		"flowtype/no-existential-type": "off",
		"flowtype/no-flow-fix-me-comments": ["warn", "^\\$FlowFixMe: \\S+"],
		"flowtype/no-mutable-array": "off",
		"flowtype/no-primitive-constructor-types": "error",
		"flowtype/no-types-missing-file-annotation": "error",
		"flowtype/no-unused-expressions": "error",
		"flowtype/no-weak-types": "warn",

		"flowtype/array-style-complex-type": "off",
		"flowtype/array-style-simple-type": "off",
		"flowtype/boolean-style": "error",
		"flowtype/define-flow-type": "error",
		"flowtype/delimiter-dangle": "error",
		"flowtype/generic-spacing": "error",
		"flowtype/newline-after-flow-annotation": "off",
		"flowtype/object-type-delimiter": "error",
		"flowtype/require-exact-type": "off",
		"flowtype/require-parameter-type": "off",
		"flowtype/require-return-type": "off",
		"flowtype/require-types-at-top": "off",
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
		"flowtype/type-import-style": "off",
		"flowtype/union-intersection-spacing": "error",
		"flowtype/use-flow-type": "error"
	}
};
