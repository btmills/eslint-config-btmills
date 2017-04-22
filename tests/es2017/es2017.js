async function foo(a, b) {
	return a + await b;
}

async function bar() {
	const val = await foo(2, 3);
	return val + 4;
}

if (!(bar() instanceof Promise)) {
	throw new Error('Async functions should return Promises.');
}
