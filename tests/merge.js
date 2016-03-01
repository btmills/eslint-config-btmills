"use strict";

var test = require("ava");
var merge = require("../merge.js");

test("root option should reset previous configs", function (t) {
	var result = merge(
		{ "env": { "browser": true } },
		{ "root": true, "env": { "node": true } }
	);

	t.same(result, { "root": true, "env": { "node": true } });
});

test("extends should add an array to an empty config", function (t) {
	var result = merge({}, { "extends": "foo" });

	t.same(result, { "extends": ["foo"] });
});

test("extends, given a string, should be appended to an existing array", function (t) {
	var result = merge(
		{ "extends": ["foo"] },
		{ "extends": "bar" }
	);

	t.same(result, { "extends": ["foo", "bar"] });
});

test("extends, given an array, should be concatenated with an existing array", function (t) {
	var result = merge(
		{ "extends": ["foo"] },
		{ "extends": ["bar", "baz"] }
	);

	t.same(result, { "extends": ["foo", "bar", "baz"] });
});

test("parser should be added if not already present", function (t) {
	var result = merge({}, { "parser": "foo" });

	t.same(result, { "parser": "foo" });
});

test("parsershould overwrite a conflicting setting", function (t) {
	var result = merge(
		{ "parser": "foo" },
		{ "parser": "bar" }
	);

	t.same(result, { "parser": "bar" });
});

test("parserOptions should be added if not already present", function (t) {
	var result = merge({}, { "parserOptions": { "ecmaVersion": 6 } });

	t.same(result, { "parserOptions": { "ecmaVersion": 6 } });
});

test("parserOptions should merge with existing settings", function (t) {
	var result = merge(
		{ "parserOptions": { "ecmaVersion": 6 } },
		{ "parserOptions": { "sourceType": "module" } }
	);

	t.same(result, {
		"parserOptions": {
			"ecmaVersion": 6,
			"sourceType": "module"
		}
	});
});

test("parserOptions should overwrite conflicting settings", function (t) {
	var result = merge(
		{ "parserOptions": { "sourceType": "script" } },
		{ "parserOptions": { "sourceType": "module" } }
	);

	t.same(result, {
		"parserOptions": {
			"sourceType": "module"
		}
	});
});

test("parserOptions.ecmaFeatures should be added if not already present", function (t) {
	var result = merge(
		{},
		{ "parserOptions": { "ecmaFeatures": { "jsx": true } } }
	);

	t.same(result, {
		"parserOptions": {
			"ecmaFeatures": {
				"jsx": true
			}
		}
	});
});

test("parserOptions.ecmaFeatures should merge with existing settings", function (t) {
	var result = merge(
		{ "parserOptions": { "ecmaFeatures": { "jsx": true } } },
		{ "parserOptions": { "ecmaFeatures": { "globalReturn": true } } }
	);

	t.same(result, {
		"parserOptions": {
			"ecmaFeatures": {
				"globalReturn": true,
				"jsx": true
			}
		}
	});
});

test("parserOptions.ecmaFeatures should overwrite conflicting settings", function (t) {
	var result = merge(
		{ "parserOptions": { "ecmaFeatures": { "jsx": true } } },
		{ "parserOptions": { "ecmaFeatures": { "jsx": false } } }
	);

	t.same(result, {
		"parserOptions": {
			"ecmaFeatures": {
				"jsx": false
			}
		}
	});
});

test("plugins should add an array to a config without plugins", function (t) {
	var result = merge({}, { "plugins": ["foo"] });

	t.same(result, { "plugins": ["foo"] });
});

test("plugins should be concatenated with existing plugins", function (t) {
	var result = merge(
		{ "plugins": ["foo"] },
		{ "plugins": ["bar", "baz"] }
	);

	t.same(result, { "plugins": ["foo", "bar", "baz"] });
});

test("env should be added if not already present", function (t) {
	var result = merge({}, { "env": { "browser": true } });

	t.same(result, { "env": { "browser": true } });
});

test("env should merge with existing environments", function (t) {
	var result = merge(
		{ "env": { "browser": true } },
		{ "env": { "node": true } }
	);

	t.same(result, {
		"env": {
			"browser": true,
			"node": true
		}
	});
});

test("env should overwrite conflicting environments", function (t) {
	var result = merge(
		{ "env": { "browser": true } },
		{ "env": { "browser": false } }
	);

	t.same(result, { "env": { "browser": false } });
});

test("globals should be added if not already present", function (t) {
	var result = merge({}, { "globals": { "describe": true } });

	t.same(result, { "globals": { "describe": true } });
});

test("globals should merge with existing globals", function (t) {
	var result = merge(
		{ "globals": { "describe": true } },
		{ "globals": { "it": true } }
	);

	t.same(result, {
		"globals": {
			"describe": true,
			"it": true
		}
	});
});

test("globals should overwrite conflicting globals", function (t) {
	var result = merge(
		{ "globals": { "describe": true } },
		{ "globals": { "describe": false } }
	);

	t.same(result, { "globals": { "describe": false } });
});

test("rules should be added if not already present", function (t) {
	var result = merge({}, { "rules": { "eqeqeq": 2 } });

	t.same(result, { "rules": { "eqeqeq": 2 } });
});

test("rules should merge with existing rules", function (t) {
	var result = merge(
		{ "rules": { "eqeqeq": 2 } },
		{ "rules": { "quotes": [2, "single"] } }
	);

	t.same(result, {
		"rules": {
			"eqeqeq": 2,
			"quotes": [2, "single"]
		}
	});
});

test("rules should overwrite conflicting rules", function (t) {
	var result = merge(
		{ "rules": { "eqeqeq": 2 } },
		{ "rules": { "eqeqeq": 0 } }
	);

	t.same(result, { "rules": { "eqeqeq": 0 } });
});

test("rules should not merge warning level and options", function (t) {
	var result = merge(
		{ "rules": { "quotes": [1, "single"] } },
		{ "rules": { "quotes": 2 } }
	);

	t.same(result, { "rules": { "quotes": 2 } });
});

test("rules should not merge options", function (t) {
	var result = merge(
		{ "rules": { "key-spacing": [2, { "beforeColon": true }] } },
		{ "rules": { "key-spacing": [2, { "align": "value" }] } }
	);

	t.same(result, {
		"rules": {
			"key-spacing": [2, { "align": "value" }]
		}
	});
});
