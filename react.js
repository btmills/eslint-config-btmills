"use strict";

module.exports = {
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018
	},

	"plugins": [
		"react"
	],

	"settings": {
		"react": {
			// `detect` will be the default in the future, but as of writing,
			// the default is still `latest`, which warns.
			"version": "detect"
		}
	},

	"rules": {
		// Nested ternaries are sometimes the most elegant way to express
		// something, particularly in JSX. Just use in good taste.
		"no-nested-ternary": "off",

		"no-unused-expressions": ["error", { "enforceForJSX": true }],

		"jsx-quotes": ["error", "prefer-double"],

		"react/jsx-no-bind": "off",
		"react/jsx-no-comment-textnodes": "warn",
		"react/jsx-no-constructed-context-values": "error",
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-no-leaked-render": "error",
		"react/jsx-no-literals": "off",
		"react/jsx-no-target-blank": "error",
		"react/jsx-no-undef": "error",
		"react/jsx-no-useless-fragment": "error",

		"react/jsx-boolean-value": "error",
		"react/jsx-child-element-spacing": "warn",
		"react/jsx-closing-bracket-location": ["error", {
			"selfClosing": false
		}],
		"react/jsx-closing-tag-location": "error",
		"react/jsx-curly-brace-presence": ["error", {
			"props": "never",
			"children": "ignore"
		}],
		"react/jsx-curly-newline": "off",
		"react/jsx-curly-spacing": "error",
		"react/jsx-equals-spacing": "error",
		"react/jsx-filename-extension": ["error", {
			"extensions": [".js"]
		}],
		"react/jsx-first-prop-new-line": "off",
		"react/jsx-fragments": "off",
		"react/jsx-handler-names": "error",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-key": "error",
		"react/jsx-max-props-per-line": "off",
		"react/jsx-newline": "off",
		"react/jsx-one-expression-per-line": "off",
		"react/jsx-pascal-case": "error",
		"react/jsx-props-no-multi-spaces": "off",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-sort-default-props": "off",
		"react/jsx-sort-props": "off",
		// This rule has been deprecated.
		// "react/jsx-space-before-closing": "error",
		"react/jsx-tag-spacing": "error",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/jsx-wrap-multilines": "error",

		"react/no-access-state-in-setstate": "error",
		"react/no-array-index-key": "error",
		"react/no-arrow-function-lifecycle": "error",
		"react/no-children-prop": "error",
		"react/no-danger": "error",
		"react/no-danger-with-children": "error",
		"react/no-deprecated": "error",
		"react/no-did-mount-set-state": "error",
		"react/no-did-update-set-state": "error",
		"react/no-direct-mutation-state": "error",
		"react/no-find-dom-node": "error",
		"react/no-invalid-html-attribute": "error",
		"react/no-is-mounted": "error",
		"react/no-multi-comp": "off",
		"react/no-namespace": "error",
		"react/no-redundant-should-component-update": "error",
		"react/no-render-return-value": "error",
		"react/no-set-state": "off",
		"react/no-string-refs": "off",
		"react/no-this-in-sfc": "off",
		"react/no-typos": "error",
		"react/no-unescaped-entities": "off",
		"react/no-unknown-property": "error",
		"react/no-unsafe": "warn",
		"react/no-unstable-nested-components": "error",
		"react/no-unused-prop-types": "off",
		"react/no-unused-state": "error",
		"react/no-will-update-set-state": "error",

		"react/boolean-prop-naming": "off",
		"react/button-has-type": "warn",
		// I don't like how it expects the corresponding prop to be optional.
		"react/default-props-match-prop-types": "off",
		"react/destructuring-assignment": "off",
		"react/display-name": "error",
		"react/forbid-component-props": "off",
		"react/forbid-dom-props": "off",
		"react/forbid-elements": "off",
		"react/forbid-foreign-prop-types": "off",
		"react/forbid-prop-types": "off",
		"react/hook-use-state": "error",
		"react/iframe-missing-sandbox": "error",
		"react/prefer-es6-class": "error",
		"react/prefer-exact-props": "off",
		"react/prefer-read-only-props": "off", // Use flowtype/require-readonly-react-props
		"react/prefer-stateless-functions": "off",
		"react/prop-types": "error",
		"react/react-in-jsx-scope": "error",
		"react/require-default-props": "off",
		"react/require-optimization": "off",
		"react/require-render-return": "error",
		"react/self-closing-comp": "error",
		"react/sort-comp": "off",
		"react/sort-prop-types": "error",
		"react/state-in-constructor": "off",
		"react/static-property-placement": "off",
		"react/style-prop-object": "error",
		"react/void-dom-elements-no-children": "error"
	}
};
