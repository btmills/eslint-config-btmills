export default class Example {
	#privateInstanceField = this.#privateInstanceMethod();
	#privateInstanceMethod() {
		return this.#privateInstanceField;
	}
	#unusedPrivateInstanceField = false;
	publicInstanceField = 42;

	static staticField = 42;
	static #privateStaticField = this.#privateStaticMethod();
	static #privateStaticMethod() {
		return this.#privateStaticField;
	}
}

await globalThis.topLevelAwait();
