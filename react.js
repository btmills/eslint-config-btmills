"use strict";

module.exports = {
	"extends": "./es6.js",

	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
			"experimentalObjectRestSpread": true
		}
	},

	"plugins": [
		"react"
	],

	"rules": {
		"jsx-quotes": ["error", "prefer-double"],

		"react/jsx-no-bind": ["error", { "ignoreRefs": true }],
		"react/jsx-no-comment-textnodes": "warn",
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-no-literals": "off",
		"react/jsx-no-target-blank": "error",
		"react/jsx-no-undef": "error",

		"react/jsx-boolean-value": "error",
		"react/jsx-closing-bracket-location": ["error", {
			"selfClosing": false
		}],
		"react/jsx-curly-spacing": "error",
		"react/jsx-equals-spacing": "error",
		"react/jsx-filename-extension": "error",
		"react/jsx-first-prop-new-line": ["error", "multiline"],
		"react/jsx-handler-names": "error",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-key": "error",
		"react/jsx-max-props-per-line": "off",
		"react/jsx-pascal-case": "error",
		"react/jsx-sort-props": "off",
		"react/jsx-space-before-closing": "error",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/jsx-wrap-multilines": "error",

		"react/no-danger": "error",
		"react/no-deprecated": "error",
		"react/no-did-mount-set-state": "error",
		"react/no-did-update-set-state": "error",
		"react/no-direct-mutation-state": "error",
		"react/no-find-dom-node": "error",
		"react/no-is-mounted": "error",
		"react/no-multi-comp": "error",
		"react/no-render-return-value": "error",
		"react/no-set-state": "off",
		"react/no-string-refs": "off",
		"react/no-unknown-property": "error",

		"react/display-name": "error",
		"react/forbid-prop-types": "off",
		"react/prefer-es6-class": "error",
		"react/prefer-stateless-functions": "off",
		"react/prop-types": "warn",
		"react/react-in-jsx-scope": "error",
		"react/require-optimization": "off",
		"react/require-render-return": "error",
		"react/self-closing-comp": "error",
		"react/sort-comp": "error",
		"react/sort-prop-types": "error"
	}
};
