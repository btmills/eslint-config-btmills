"use strict";

module.exports = {
	"rules": {
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-class-assign": "off",
		"no-cond-assign": "error",
		"no-console": "off",
		"no-const-assign": "off",
		"no-constant-condition": "error",
		"no-continue": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-div-regex": "error",
		"no-dupe-class-members": "off",
		"no-dupe-keys": "error",
		"no-dupe-args": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "off",
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
		"no-mixed-operators": "off",
		"no-mixed-requires": "off",
		"no-mixed-spaces-and-tabs": ["error", false],
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "off",
		"no-native-reassign": "error",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "error",
		"no-new": "off",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-path-concat": "error",
		"no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
		"no-process-env": "off",
		"no-process-exit": "error",
		"no-proto": "error",
		"no-prototype-builtins": "off",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-restricted-globals": "off",
		"no-restricted-modules": "off",
		"no-restricted-properties": "off",
		"no-restricted-syntax": "off",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "off",
		"no-spaced-func": "error",
		"no-sparse-arrays": "error",
		"no-sync": "error",
		"no-tabs": "off",
		"no-template-curly-in-string": "off",
		"no-ternary": "off",
		"no-trailing-spaces": "error",
		"no-this-before-super": "off",
		"no-throw-literal": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-undefined": "error",
		"no-unexpected-multiline": "error",
		"no-underscore-dangle": "off",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "error",
		"no-unused-vars": ["error", { "vars": "all", "args": "after-used" }],
		"no-use-before-define": "off",
		"no-useless-call": "error",
		"no-useless-computed-key": "off",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "off",
		"no-void": "error",
		"no-var": "off",
		"no-warning-comments": "off",
		"no-whitespace-before-property": "error",
		"no-with": "error",

		"array-bracket-spacing": ["error", "never"],
		"array-callback-return": "error",
		"arrow-parens": "off",
		"arrow-spacing": "off",
		"accessor-pairs": "off",
		"block-scoped-var": "off",
		"block-spacing": "error",
		"brace-style": ["error", "1tbs"],
		"callback-return": "error",
		"camelcase": "off",
		"class-methods-use-this": "off",
		"comma-dangle": ["error", "never"],
		"comma-spacing": "error",
		"comma-style": "error",
		"complexity": ["error", 11],
		"computed-property-spacing": "off",
		"consistent-return": "error",
		"consistent-this": "off",
		"constructor-super": "off",
		"curly": ["error", "multi-line"],
		"default-case": "error",
		"dot-location": ["error", "property"],
		"dot-notation": ["error", { "allowKeywords": true }],
		"eol-last": "error",
		"eqeqeq": ["error", "allow-null"],
		"func-name-matching": "off",
		"func-names": "off",
		"func-style": ["off", "declaration"],
		"generator-star-spacing": "off",
		"global-require": "error",
		"guard-for-in": "error",
		"handle-callback-err": "error",
		"id-length": "off",
		"indent": "off",
		"init-declarations": "off",
		"jsx-quotes": "off",
		"key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
		"keyword-spacing": "error",
		"line-comment-position": "off",
		"linebreak-style": ["error", "unix"],
		"lines-around-comment": "error",
		"lines-around-directive": ["error", { "before": "never", "after": "always" }],
		"max-depth": "off",
		"max-len": "off",
		"max-lines": "off",
		"max-nested-callbacks": "off",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "error",
		"multiline-ternary": "off",
		"new-cap": "error",
		"new-parens": "error",
		"newline-after-var": "error",
		"newline-before-return": "off",
		"object-curly-newline": "off",
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": "off",
		"object-shorthand": "off",
		"one-var": "off",
		"operator-assignment": ["error", "always"],
		"operator-linebreak": "off",
		"padded-blocks": "off",
		"prefer-arrow-callback": "off",
		"prefer-const": "off",
		"prefer-numeric-literals": "error",
		"prefer-spread": "off",
		"prefer-reflect": "off",
		"prefer-template": "off",
		"quote-props": ["error", "consistent-as-needed"],
		"quotes": ["error", "single"],
		"radix": "error",
		"rest-spread-spacing": "off",
		"id-match": "off",
		"require-jsdoc": "off",
		"require-yield": "off",
		"semi": "error",
		"semi-spacing": ["error", { "before": false, "after": true }],
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
		"symbol-description": "off",
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
