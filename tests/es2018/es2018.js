async function foo(a, b) {
	return {
		...await a,
		b
	};
}

async function bar() {
	const { val, ...rest } = await foo(2, 3);
	return val + 4 - rest;
}

if (!(bar() instanceof Promise)) {
	throw new Error('Async functions should return Promises.');
}
