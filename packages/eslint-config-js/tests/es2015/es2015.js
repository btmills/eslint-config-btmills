export default class Foo {
	constructor() {
		this.bar = 42;
		let [a, b] = this.bar.toString();
		b += 4;
		this.selfRef = new Foo(a, b);
	}

	*gen() {
		return this.bar;
	}
}
