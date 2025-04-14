type Thing = number;

export function count(value: Thing): unknown {
	var self = this;
	return `${self} ${value === 1 ? 'item' : 'items'}`;
}
