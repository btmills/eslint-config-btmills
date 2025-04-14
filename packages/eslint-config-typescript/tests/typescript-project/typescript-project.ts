type Thing = number;

export function count(stuff: Array<Thing>): unknown {
	delete stuff[0];
	return stuff.includes(1);
}
