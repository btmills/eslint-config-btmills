"use strict";

module.exports = {
	"parser": "babel-eslint",

	"plugins": [
		"flowtype"
	],

	"rules": {
		"flowtype/no-dupe-keys": "error",
		"flowtype/no-duplicate-type-union-intersection-members": "error",
		"flowtype/no-existential-type": "off",
		"flowtype/no-flow-fix-me-comments": ["warn", "^\\$FlowFixMe: \\S+"],
		"flowtype/no-internal-flow-type": "error",
		"flowtype/no-mixed": "off",
		"flowtype/no-mutable-array": "off",
		"flowtype/no-primitive-constructor-types": "error",
		"flowtype/no-types-missing-file-annotation": "error",
		"flowtype/no-unused-expressions": "error",
		"flowtype/no-weak-types": "warn",

		"flowtype/array-style-complex-type": "off",
		"flowtype/array-style-simple-type": "off",
		"flowtype/arrow-parens": "off",
		"flowtype/boolean-style": "error",
		"flowtype/define-flow-type": "error",
		"flowtype/delimiter-dangle": "error",
		"flowtype/enforce-line-break": "off",
		"flowtype/generic-spacing": "error",
		"flowtype/interface-id-match": "off",
		"flowtype/newline-after-flow-annotation": "off",
		"flowtype/object-type-curly-spacing": "off",
		"flowtype/object-type-delimiter": "error",
		"flowtype/quotes": "off",
		"flowtype/require-compound-type-alias": "off",
		"flowtype/require-exact-type": "off",
		"flowtype/require-indexer-name": "off",
		"flowtype/require-inexact-type": "off",
		"flowtype/require-parameter-type": "off",
		"flowtype/require-readonly-react-props": "off",
		"flowtype/require-return-type": "off",
		"flowtype/require-types-at-top": "off",
		"flowtype/require-valid-file-annotation": ["error", "always", {
			"annotationStyle": "line"
		}],
		"flowtype/require-variable-type": "off",
		"flowtype/semi": "error",
		"flowtype/sort-keys": "error",
		"flowtype/sort-type-union-intersection-members": "off",
		"flowtype/space-after-type-colon": "error",
		"flowtype/space-before-generic-bracket": "error",
		"flowtype/space-before-type-colon": "error",
		"flowtype/spread-exact-type": "off",
		"flowtype/type-id-match": "off",
		"flowtype/type-import-style": "off",
		"flowtype/union-intersection-spacing": "error",
		"flowtype/use-flow-type": "error",
		"flowtype/use-read-only-spread": "error"
	}
};
