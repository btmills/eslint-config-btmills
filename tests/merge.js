"use strict";

var assert = require("assert");
var merge = require("../merge.js");

describe("merge", function () {

	describe("root", function () {

		it("should reset previous configs", function () {
			var result = merge(
				{ "env": { "browser": true } },
				{ "root": true, "env": { "node": true } }
			);

			assert.deepEqual(result, { "root": true, "env": { "node": true } });
		});

	});

	describe("extends", function () {

		it("should add an array to an empty config", function () {
			var result = merge({}, { "extends": "foo" });

			assert.deepEqual(result, { "extends": ["foo"] });
		});

		describe("given a string", function () {

			it("should be appended to an existing array", function () {
				var result = merge(
					{ "extends": ["foo"] },
					{ "extends": "bar" }
				);

				assert.deepEqual(result, { "extends": ["foo", "bar"] });
			});

		});

		describe("given an array", function () {

			it("should be concatenated with an existing array", function () {
				var result = merge(
					{ "extends": ["foo"] },
					{ "extends": ["bar", "baz"] }
				);

				assert.deepEqual(result, { "extends": ["foo", "bar", "baz"] });
			});

		});

	});

	describe("parser", function () {

		it("should be added if not already present", function () {
			var result = merge({}, { "parser": "foo" });

			assert.deepEqual(result, { "parser": "foo" });
		});

		it("should overwrite a conflicting setting", function () {
			var result = merge(
				{ "parser": "foo" },
				{ "parser": "bar" }
			);

			assert.deepEqual(result, { "parser": "bar" });
		});

	});

	describe("parserOptions", function () {

		it("should be added if not already present", function () {
			var result = merge({}, { "parserOptions": { "ecmaVersion": 6 } });

			assert.deepEqual(result, { "parserOptions": { "ecmaVersion": 6 } });
		});

		it("should merge with existing settings", function () {
			var result = merge(
				{ "parserOptions": { "ecmaVersion": 6 } },
				{ "parserOptions": { "sourceType": "module" } }
			);

			assert.deepEqual(result, {
				"parserOptions": {
					"ecmaVersion": 6,
					"sourceType": "module"
				}
			});
		});

		it("should overwrite conflicting settings", function () {
			var result = merge(
				{ "parserOptions": { "sourceType": "script" } },
				{ "parserOptions": { "sourceType": "module" } }
			);

			assert.deepEqual(result, {
				"parserOptions": {
					"sourceType": "module"
				}
			});
		});

		describe("ecmaFeatures", function () {

			it("should be added if not already present", function () {
				var result = merge(
					{},
					{ "parserOptions": { "ecmaFeatures": { "jsx": true } } }
				);

				assert.deepEqual(result, {
					"parserOptions": {
						"ecmaFeatures": {
							"jsx": true
						}
					}
				});
			});

			it("should merge with existing settings", function () {
				var result = merge(
					{ "parserOptions": { "ecmaFeatures": { "jsx": true } } },
					{ "parserOptions": { "ecmaFeatures": { "globalReturn": true } } }
				);

				assert.deepEqual(result, {
					"parserOptions": {
						"ecmaFeatures": {
							"globalReturn": true,
							"jsx": true
						}
					}
				});
			});

			it("should overwrite conflicting settings", function () {
				var result = merge(
					{ "parserOptions": { "ecmaFeatures": { "jsx": true } } },
					{ "parserOptions": { "ecmaFeatures": { "jsx": false } } }
				);

				assert.deepEqual(result, {
					"parserOptions": {
						"ecmaFeatures": {
							"jsx": false
						}
					}
				});
			});

		});

	});

	describe("plugins", function () {

		it("should add an array to a config without plugins", function () {
			var result = merge({}, { "plugins": ["foo"] });

			assert.deepEqual(result, { "plugins": ["foo"] });
		});

		it("should be concatenated with existing plugins", function () {
			var result = merge(
				{ "plugins": ["foo"] },
				{ "plugins": ["bar", "baz"] }
			);

			assert.deepEqual(result, { "plugins": ["foo", "bar", "baz"] });
		});

	});

	describe("env", function () {

		it("should be added if not already present", function () {
			var result = merge({}, { "env": { "browser": true } });

			assert.deepEqual(result, { "env": { "browser": true } });
		});

		it("should merge with existing environments", function () {
			var result = merge(
				{ "env": { "browser": true } },
				{ "env": { "node": true } }
			);

			assert.deepEqual(result, {
				"env": {
					"browser": true,
					"node": true
				}
			});
		});

		it("should overwrite conflicting environments", function () {
			var result = merge(
				{ "env": { "browser": true } },
				{ "env": { "browser": false } }
			);

			assert.deepEqual(result, { "env": { "browser": false } });
		});

	});

	describe("globals", function () {

		it("should be added if not already present", function () {
			var result = merge({}, { "globals": { "describe": true } });

			assert.deepEqual(result, { "globals": { "describe": true } });
		});

		it("should merge with existing globals", function () {
			var result = merge(
				{ "globals": { "describe": true } },
				{ "globals": { "it": true } }
			);

			assert.deepEqual(result, {
				"globals": {
					"describe": true,
					"it": true
				}
			});
		});

		it("should overwrite conflicting globals", function () {
			var result = merge(
				{ "globals": { "describe": true } },
				{ "globals": { "describe": false } }
			);

			assert.deepEqual(result, { "globals": { "describe": false } });
		});

	});

	describe("rules", function () {

		it("should be added if not already present", function () {
			var result = merge({}, { "rules": { "eqeqeq": 2 } });

			assert.deepEqual(result, { "rules": { "eqeqeq": 2 } });
		});

		it("should merge with existing rules", function () {
			var result = merge(
				{ "rules": { "eqeqeq": 2 } },
				{ "rules": { "quotes": [2, "single"] } }
			);

			assert.deepEqual(result, {
				"rules": {
					"eqeqeq": 2,
					"quotes": [2, "single"]
				}
			});
		});

		it("should overwrite conflicting rules", function () {
			var result = merge(
				{ "rules": { "eqeqeq": 2 } },
				{ "rules": { "eqeqeq": 0 } }
			);

			assert.deepEqual(result, { "rules": { "eqeqeq": 0 } });
		});

		it("should not merge warning level and options", function () {
			var result = merge(
				{ "rules": { "quotes": [1, "single"] } },
				{ "rules": { "quotes": 2 } }
			);

			assert.deepEqual(result, { "rules": { "quotes": 2 } });
		});

		it("should not merge options", function () {
			var result = merge(
				{ "rules": { "key-spacing": [2, { "beforeColon": true }] } },
				{ "rules": { "key-spacing": [2, { "align": "value" }] } }
			);

			assert.deepEqual(result, {
				"rules": {
					"key-spacing": [2, { "align": "value" }]
				}
			});
		});

	});

});
