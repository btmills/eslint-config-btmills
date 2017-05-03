// @flow

type Thing = number;

function count(value: Thing): string {
	return `${value} ${value === 1 ? 'item' : 'items'}`;
}

const message: string = count(42);

message.toUpperCase();
