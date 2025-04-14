const actual = 2 ** 8;
const expected = Math.pow(2, 8);

if (actual !== expected) {
	throw new Error('Whoops!');
}
