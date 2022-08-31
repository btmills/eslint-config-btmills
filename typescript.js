"use strict";

module.exports = {
	"parser": "@typescript-eslint/parser",

	"plugins": ["@typescript-eslint"],

	"rules": {
		// Use `private` instead of the underscore convention.
		"no-underscore-dangle": ["error", {
			"enforceInClassFields": true,
			"enforceInMethodNames": true
		}],

		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": ["error", { "default": "generic" }],
		"@typescript-eslint/await-thenable": "off", // Requires type information
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/ban-tslint-comment": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/class-literal-property-style": "off",
		"@typescript-eslint/consistent-generic-constructors": "error",
		"@typescript-eslint/consistent-indexed-object-style": "off",
		"@typescript-eslint/consistent-type-assertions": [
			"error",
			{
				"assertionStyle": "as",
				"objectLiteralTypeAssertions": "allow-as-parameter"
			}
		],
		"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		"@typescript-eslint/consistent-type-exports": "off", // Requires type information
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/member-delimiter-style": "off", // Covered by Prettier
		"@typescript-eslint/member-ordering": "off",
		"@typescript-eslint/method-signature-style": "error",
		"@typescript-eslint/naming-convention": "off",
		"@typescript-eslint/no-base-to-string": "off", // Requires type information
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"@typescript-eslint/no-confusing-void-expression": "off", // Requires type information
		"@typescript-eslint/no-duplicate-enum-values": "error",
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-extraneous-class": "error",
		"@typescript-eslint/no-floating-promises": "off", // Requires type information
		"@typescript-eslint/no-for-in-array": "off", // Requires type information
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-invalid-void-type": "error",
		"@typescript-eslint/no-meaningless-void-operator": "off", // Requires type information
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-misused-promises": "off", // Requires type information
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "off", // Covered by @typescript-eslint/no-non-null-assertion
		"@typescript-eslint/no-non-null-asserted-optional-chain": "off", // Covered by @typescript-eslint/no-non-null-assertion
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-parameter-properties": "error",
		"@typescript-eslint/no-redundant-type-constituents": "off", // Requires type information
		"@typescript-eslint/no-require-imports": "off", // Covered by eslint-plugin-import/no-commonjs
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-type-alias": "off",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "off", // Requires type information
		"@typescript-eslint/no-unnecessary-condition": "off", // Requires type information
		"@typescript-eslint/no-unnecessary-qualifier": "off", // Requires type information
		"@typescript-eslint/no-unnecessary-type-arguments": "off", // Requires type information
		"@typescript-eslint/no-unnecessary-type-assertion": "off", // Requires type information
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-unsafe-argument": "off", // Requires type information
		"@typescript-eslint/no-unsafe-assignment": "off", // Requires type information
		"@typescript-eslint/no-unsafe-call": "off", // Requires type information
		"@typescript-eslint/no-unsafe-member-access": "off", // Requires type information
		"@typescript-eslint/no-unsafe-return": "off", // Requires type information
		"@typescript-eslint/no-useless-empty-export": "error",
		"@typescript-eslint/no-var-requires": "off", // Covered by eslint-plugin-import/no-commonjs
		"@typescript-eslint/non-nullable-type-assertion-style": "off", // Requires type information
		"@typescript-eslint/parameter-properties": "off", // Covered by @typescript-eslint/no-parameter-properties
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-enum-initializers": "error",
		"@typescript-eslint/prefer-for-of": "off",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-includes": "off", // Requires type information
		"@typescript-eslint/prefer-literal-enum-member": "error",
		"@typescript-eslint/": "off", // Covered by @typescript-eslint/no-namespace
		"@typescript-eslint/prefer-nullish-coalescing": "off", // Requires type information
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly": "off", // Requires type information
		"@typescript-eslint/prefer-readonly-parameter-types": "off", // Requires type information
		"@typescript-eslint/prefer-reduce-type-parameter": "off", // Requires type information
		"@typescript-eslint/prefer-regexp-exec": "off", // Requires type information
		"@typescript-eslint/prefer-return-this-type": "off", // Requires type information
		"@typescript-eslint/prefer-string-starts-ends-with": "off", // Requires type information
		"@typescript-eslint/prefer-ts-expect-error": "error",
		"@typescript-eslint/promise-function-async": "off", // Requires type information
		"@typescript-eslint/require-array-sort-compare": "off", // Requires type information
		"@typescript-eslint/restrict-plus-operands": "off", // Requires type information
		"@typescript-eslint/restrict-template-expressions": "off", // Requires type information
		"@typescript-eslint/sort-type-union-intersection-members": "off",
		"@typescript-eslint/strict-boolean-expressions": "off", // Requires type information
		"@typescript-eslint/switch-exhaustiveness-check": "off", // Requires type information
		"@typescript-eslint/triple-slash-reference": ["error", {
			"lib": "never",
			"path": "never",
			"types": "never"
		}],
		"@typescript-eslint/type-annotation-spacing": "off", // Covered by Prettier
		"@typescript-eslint/typedef": "off",
		"@typescript-eslint/unbound-method": "off", // Requires type information
		"@typescript-eslint/unified-signatures": ["error", {
			"ignoreDifferentlyNamedParameters": true
		}],

		// Extension rules

		"default-param-last": "off",
		"@typescript-eslint/default-param-last": "error",

		"@typescript-eslint/dot-notation": "off", // Requires type information

		"@typescript-eslint/init-declarations": "off",

		"no-array-constructor": "off",
		"@typescript-eslint/no-array-constructor": "error",

		"no-dupe-class-members": "off",
		"@typescript-eslint/no-dupe-class-members": "error",

		"@typescript-eslint/no-duplicate-imports": "off", // Covered by import/no-duplicates

		"no-empty-function": "off",
		"@typescript-eslint/no-empty-function": "error",

		"@typescript-eslint/no-extra-parens": "off", // Covered by Prettier

		"no-extra-semi": "off",
		"@typescript-eslint/no-extra-semi": "error",

		"@typescript-eslint/no-implied-eval": "off", // Requires type information

		"@typescript-eslint/no-invalid-this": "off",

		"no-loop-func": "off",
		"@typescript-eslint/no-loop-func": "error",

		"no-loss-of-precision": "off",
		"@typescript-eslint/no-loss-of-precision": "error",

		"@typescript-eslint/no-magic-numbers": "off",

		"no-redeclare": "off",
		"@typescript-eslint/no-redeclare": "error",

		"@typescript-eslint/no-restricted-imports": "off",

		"@typescript-eslint/return-await": "off", // Requires type information

		"no-shadow": "off",
		"@typescript-eslint/no-shadow": "error",

		"@typescript-eslint/no-throw-literal": "off", // Requires type information

		"no-unused-expressions": "off",
		"@typescript-eslint/no-unused-expressions": "error",

		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used" }],

		"@typescript-eslint/no-use-before-define": "off",

		"no-useless-constructor": "off",
		"@typescript-eslint/no-useless-constructor": "error",

		"@typescript-eslint/require-await": "off" // Requires type information
	}
};
