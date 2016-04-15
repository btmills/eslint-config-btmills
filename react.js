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

	"env": {
		"es6": true
	},

	"rules": {
		"react/jsx-no-bind": [2, { "ignoreRefs": true }],
		"react/jsx-no-duplicate-props": 2,
		"react/jsx-no-literals": 0,
		"react/jsx-no-undef": 2,

		"jsx-quotes": [2, "prefer-double"],
		"react/jsx-boolean-value": 2,
		"react/jsx-closing-bracket-location": 2,
		"react/jsx-curly-spacing": 2,
		"react/jsx-equals-spacing": 2,
		"react/jsx-handler-names": 2,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-key": 2,
		"react/jsx-max-props-per-line": 0,
		"react/jsx-pascal-case": 2,
		"react/jsx-space-before-closing": 2,
		"react/jsx-sort-props": 0,
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,

		"react/no-danger": 2,
		"react/no-deprecated": 2,
		"react/no-did-mount-set-state": 2,
		"react/no-did-update-set-state": 2,
		"react/no-direct-mutation-state": 2,
		"react/no-is-mounted": 2,
		"react/no-multi-comp": 2,
		"react/no-set-state": 0,
		"react/no-string-refs": 0,
		"react/no-unknown-property": 2,

		"react/display-name": 2,
		"react/forbid-prop-types": 0,
		"react/prefer-es6-class": 2,
		"react/prop-types": 1,
		"react/react-in-jsx-scope": 2,
		"react/require-extension": 2,
		"react/self-closing-comp": 2,
		"react/sort-comp": 2,
		"react/sort-prop-types": 2,
		"react/wrap-multilines": 2
	}
};
