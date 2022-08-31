type Thing = number;

export function count(value: Thing): unknown {
	return `${value} ${value === 1 ? 'item' : 'items'}`;
}
