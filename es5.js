"use strict";

module.exports = {
	"reportUnusedDisableDirectives": true,
	"rules": {
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "off", // ES2017
		"no-await-in-loop": "off", // ES2017
		"no-bitwise": "error",
		"no-buffer-constructor": "error", // TODO: Deprecated. Use eslint-plugin-node.
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-class-assign": "off", // ES2015
		"no-compare-neg-zero": "off",
		"no-cond-assign": "error",
		"no-confusing-arrow": "off", // ES2015
		"no-console": "off",
		"no-const-assign": "off", // ES2015
		"no-constant-condition": "error",
		"no-constructor-return": "off", // ES2015
		"no-continue": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-div-regex": "error",
		"no-dupe-class-members": "off", // ES2015
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-dupe-args": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "off", // ES2015
		"no-else-return": "off",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-function": "error",
		"no-eq-null": "off",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-parens": "off",
		"no-extra-semi": "error",
		"no-fallthrough": "error",
		"no-floating-decimal": "error",
		"no-func-assign": "error",
		"no-implicit-coercion": "off",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-import-assign": "off", // ES2015
		"no-inline-comments": "off",
		"no-inner-declarations": ["error", "functions"],
		"no-invalid-regexp": "error",
		"no-invalid-this": "off",
		"no-irregular-whitespace": "error",
		"no-iterator": "off",
		"no-label-var": "off",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "off",
		"no-loop-func": "error",
		"no-loss-of-precision": "error",
		"no-magic-numbers": "off",
		"no-misleading-character-class": "error",
		"no-mixed-operators": "off",
		"no-mixed-requires": "off", // TODO: Deprecated. Use eslint-plugin-node.
		"no-mixed-spaces-and-tabs": ["error", false],
		"no-multi-assign": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "off",
		"no-native-reassign": "error",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "error",
		"no-new": "off",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error", // TODO: Deprecated. Use eslint-plugin-node.
		"no-new-symbol": "off", // ES2015
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-path-concat": "error", // TODO: Deprecated. Use eslint-plugin-node.
		"no-plusplus": "off",
		"no-process-env": "off", // TODO: Deprecated. Use eslint-plugin-node.
		"no-process-exit": "error", // TODO: Deprecated. Use eslint-plugin-node.
		"no-promise-executor-return": "off", // ES2015
		"no-proto": "error",
		"no-prototype-builtins": "off",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-restricted-exports": "off", // ES2015
		"no-restricted-globals": "off",
		"no-restricted-modules": "off", // TODO: Deprecated. Use eslint-plugin-node.
		"no-restricted-properties": "off",
		"no-restricted-syntax": "off",
		"no-return-assign": "error",
		"no-return-await": "off", // ES2017
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-setter-return": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "off",
		"no-spaced-func": "error",
		"no-sparse-arrays": "error",
		"no-sync": "error",
		"no-tabs": "off",
		"no-template-curly-in-string": "off", // ES2015
		"no-ternary": "off",
		"no-trailing-spaces": "error",
		"no-this-before-super": "off", // ES2015
		"no-throw-literal": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-undefined": "error",
		"no-unexpected-multiline": "error",
		"no-underscore-dangle": "off",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": "off", // ES2020
		"no-unused-expressions": "error",
		"no-unused-vars": ["error", { "vars": "all", "args": "after-used" }],
		"no-use-before-define": "off",
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": "off", // ES2015
		"no-useless-concat": "error",
		"no-useless-constructor": "off", // ES2015
		"no-useless-escape": "error",
		"no-useless-return": "off",
		// If we want to pass `undefined`, it's safer to use `void 0`.
		"no-void": "off",
		"no-var": "off",
		"no-warning-comments": "off",
		"no-whitespace-before-property": "error",
		"no-with": "error",

		"accessor-pairs": "off",
		"array-bracket-newline": "off",
		"array-bracket-spacing": ["error", "never"],
		"array-callback-return": "error",
		"array-element-newline": "off",
		"arrow-parens": "off", // ES2015
		"arrow-spacing": "off", // ES2015
		"block-scoped-var": "off",
		"block-spacing": "error",
		"brace-style": ["error", "1tbs"],
		"callback-return": "error", // TODO: Deprecated. Use eslint-plugin-node.
		"camelcase": "off",
		"capitalized-comments": "off",
		"class-methods-use-this": "off", // ES2015
		"comma-dangle": ["error", "never"],
		"comma-spacing": "error",
		"comma-style": "error",
		"complexity": ["error", 11],
		"computed-property-spacing": "off", // ES2015
		"consistent-return": "error",
		"consistent-this": "off",
		"constructor-super": "off", // ES2015
		"curly": ["error", "multi-line"],
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "off", // ES2015
		"dot-location": ["error", "property"],
		"dot-notation": ["error", { "allowKeywords": true }],
		"eol-last": "error",
		"eqeqeq": ["error", "allow-null"],
		"for-direction": "error",
		"func-name-matching": "off",
		"func-names": "off",
		"func-style": ["off", "declaration"],
		"function-call-argument-newline": "off",
		"function-paren-newline": "off",
		"generator-star-spacing": "off", // ES2015
		"getter-return": "error",
		"global-require": "error", // TODO: Deprecated. Use eslint-plugin-node.
		"grouped-accessor-pairs": ["error", "getBeforeSet"],
		"guard-for-in": "error",
		"handle-callback-err": "error", // TODO: Deprecated. Use eslint-plugin-node.
		"id-blacklist": "off", // Deprecated. Use id-denylist.
		"id-denylist": "off",
		"id-length": "off",
		"id-match": "off",
		"indent": "off",
		"init-declarations": "off",
		"jsx-quotes": "off",
		"key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
		"keyword-spacing": "error",
		"line-comment-position": "off",
		"linebreak-style": ["error", "unix"],
		"lines-around-comment": "error",
		"lines-around-directive": "off",
		"lines-between-class-members": "off",
		"max-classes-per-file": "off", // ES2015
		"max-depth": "off",
		"max-len": "off",
		"max-lines": "off",
		"max-lines-per-function": "off",
		"max-nested-callbacks": "off",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "error",
		"multiline-comment-style": "off",
		"multiline-ternary": "off",
		"new-cap": "error",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"nonblock-statement-body-position": "error",
		"object-curly-newline": "off",
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": "off",
		"object-shorthand": "off", // ES2015
		"one-var": "off",
		"operator-assignment": ["error", "always"],
		"operator-linebreak": "off",
		"padded-blocks": "off",
		"padding-line-between-statements": ["error", {
			"blankLine": "always",
			"prev": "directive",
			"next": "*"
		}, {
			"blankLine": "never",
			"prev": "directive",
			"next": "directive"
		}],
		"prefer-arrow-callback": "off", // ES2015
		"prefer-const": "off", // ES2015
		"prefer-destructuring": "off", // ES2015
		"prefer-exponentiation-operator": "off", // ES2016
		"prefer-named-capture-group": "off", // ES2018
		"prefer-numeric-literals": "error",
		"prefer-object-spread": "off", // ES2018
		"prefer-promise-reject-errors": "off", // ES2015
		"prefer-reflect": "off", // ES2015
		"prefer-regex-literals": "error",
		"prefer-rest-params": "off", // ES2015
		"prefer-spread": "off", // ES2015
		"prefer-template": "off", // ES2015
		"quote-props": ["error", "as-needed", {
			"numbers": true
		}],
		"quotes": ["error", "single"],
		"radix": "error",
		"require-atomic-updates": "off", // ES2015
		"require-await": "off", // ES2017
		"require-jsdoc": "off",
		"require-unicode-regexp": "off", // ES2015
		"require-yield": "off",
		"rest-spread-spacing": "off", // ES2015
		"semi": "error",
		"semi-spacing": ["error", { "before": false, "after": true }],
		"semi-style": "error",
		"sort-imports": "off", // ES2015
		"sort-keys": "off",
		"sort-vars": "off",
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never"
		}],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": ["error", { "words": true, "nonwords": false }],
		"spaced-comment": "off",
		"strict": "error",
		"switch-colon-spacing": "error",
		"symbol-description": "off", // ES2015
		"template-curly-spacing": "off", // ES2015
		"template-tag-spacing": "off", // ES2015
		"unicode-bom": "error",
		"use-isnan": "error",
		"valid-jsdoc": "off",
		"valid-typeof": "error",
		"vars-on-top": "off",
		"wrap-iife": "error",
		"wrap-regex": "off",
		"yoda": ["error", "never", { "exceptRange": true }]
	}
};
