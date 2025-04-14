import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default defineConfig({
	name: 'React',

	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},

	plugins: {
		react: pluginReact,
		'react-hooks': pluginReactHooks,
	},

	settings: {
		react: {
			version: 'detect',
		},
	},

	rules: {
		'no-unused-expressions': ['error', { enforceForJSX: true }],

		'react/jsx-no-bind': 'off',
		'react/jsx-no-comment-textnodes': 'warn',
		'react/jsx-no-constructed-context-values': 'error',
		'react/jsx-no-duplicate-props': 'error',
		// Too many false positives. Rely on type checkers instead.
		'react/jsx-no-leaked-render': 'off',
		'react/jsx-no-literals': 'off',
		'react/jsx-no-script-url': 'error',
		'react/jsx-no-target-blank': 'error',
		'react/jsx-no-undef': 'error',
		'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

		'react/jsx-boolean-value': 'error',
		'react/jsx-curly-brace-presence': [
			'error',
			{
				props: 'never',
				children: 'ignore',
			},
		],
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.tsx'] }],
		'react/jsx-fragments': 'off',
		'react/jsx-handler-names': 'error',
		'react/jsx-key': 'error',
		'react/jsx-max-depth': 'off',
		'react/jsx-pascal-case': 'error',
		'react/jsx-props-no-spread-multi': 'error',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-sort-props': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',

		'react/no-access-state-in-setstate': 'error',
		'react/no-array-index-key': 'error',
		'react/no-arrow-function-lifecycle': 'error',
		'react/no-children-prop': 'error',
		'react/no-danger': 'error',
		'react/no-danger-with-children': 'error',
		'react/no-deprecated': 'error',
		'react/no-did-mount-set-state': 'error',
		'react/no-did-update-set-state': 'error',
		'react/no-direct-mutation-state': 'error',
		'react/no-find-dom-node': 'error',
		'react/no-invalid-html-attribute': 'error',
		'react/no-is-mounted': 'error',
		'react/no-multi-comp': 'off',
		'react/no-namespace': 'error',
		'react/no-object-type-as-default-prop': 'error',
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value': 'error',
		'react/no-set-state': 'off',
		'react/no-string-refs': 'off',
		'react/no-this-in-sfc': 'off',
		'react/no-typos': 'error',
		'react/no-unescaped-entities': 'off',
		'react/no-unknown-property': 'error',
		'react/no-unsafe': 'warn',
		'react/no-unstable-nested-components': 'error',
		'react/no-unused-class-component-methods': 'error',
		'react/no-unused-prop-types': 'off',
		'react/no-unused-state': 'error',
		'react/no-will-update-set-state': 'error',

		'react/boolean-prop-naming': 'off',
		'react/button-has-type': 'warn',
		'react/checked-requires-onchange-or-readonly': 'error',
		'react/default-props-match-prop-types': 'off',
		'react/destructuring-assignment': 'off',
		'react/display-name': 'error',
		'react/forbid-component-props': 'off',
		'react/forbid-dom-props': 'off',
		'react/forbid-elements': 'off',
		'react/forbid-foreign-prop-types': 'off',
		'react/forbid-prop-types': 'off',
		'react/forward-ref-uses-ref': 'error',
		'react/function-component-definition': 'off',
		'react/hook-use-state': 'off',
		'react/iframe-missing-sandbox': 'error',
		'react/prefer-es6-class': 'error',
		'react/prefer-exact-props': 'off',
		'react/prefer-read-only-props': 'error',
		'react/prefer-stateless-function': 'off',
		'react/prop-types': 'error',
		'react/react-in-jsx-scope': 'error',
		'react/require-default-props': 'off',
		'react/require-optimization': 'off',
		'react/require-render-return': 'error',
		'react/self-closing-comp': 'error',
		'react/sort-comp': 'off',
		'react/sort-default-props': 'error',
		'react/sort-prop-types': 'error',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/style-prop-object': 'error',
		'react/void-dom-elements-no-children': 'error',

		'react-hooks/exhaustive-deps': 'error',
		'react-hooks/rules-of-hooks': 'error',
	},
});
