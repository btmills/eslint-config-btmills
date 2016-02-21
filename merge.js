"use strict";

function assign(target, source) {
	Object.keys(source).forEach(function (key) {
		target[key] = source[key];
	});

	return target;
}

function assignIn(target, source, key) {
	if (typeof source[key] === "object") {
		if (typeof target[key] !== "object") {
			target[key] = {};
		}

		return assign(target[key], source[key]);
	}

	return null;
}

module.exports = function () {
	var merged = {};

	[].slice.call(arguments).forEach(function (config) {
		if (config.root) {
			merged = {
				"root": true
			};
		}

		if (typeof config.extends === "string") {
			if (!Array.isArray(merged.extends)) {
				merged.extends = [];
			}

			merged.extends.push(config.extends);
		} else if (Array.isArray(config.extends)) {
			if (!Array.isArray(merged.extends)) {
				merged.extends = [];
			}

			[].push.apply(merged.extends, config.extends);
		}

		if (typeof config.parser === "string") {
			merged.parser = config.parser;
		}

		if (typeof config.parserOptions === "object") {
			if (typeof merged.parserOptions !== "object") {
				merged.parserOptions = {};
			}

			Object.keys(config.parserOptions).forEach(function (key) {
				if (key === "ecmaFeatures") {
					assignIn(merged.parserOptions, config.parserOptions, "ecmaFeatures");
				} else {
					merged.parserOptions[key] = config.parserOptions[key];
				}
			});
		}

		if (Array.isArray(config.plugins)) {
			if (!Array.isArray(merged.plugins)) {
				merged.plugins = [];
			}

			[].push.apply(merged.plugins, config.plugins);
		}

		assignIn(merged, config, "env");
		assignIn(merged, config, "globals");
		assignIn(merged, config, "rules");
	});

	return merged;
};
