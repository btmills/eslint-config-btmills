// @flow

type Thing = number;

function count(value: Thing): mixed {
	return `${value} ${value === 1 ? 'item' : 'items'}`;
}

// $FlowFixMe: https://github.com/example/issues/1234
const message: boolean = count(42);

message.toUpperCase();
