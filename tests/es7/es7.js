const actual = 2 ** 8;
const expected = 256;

if (actual !== expected) {
	throw new Error('Whoops!');
}
