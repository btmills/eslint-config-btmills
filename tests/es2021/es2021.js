let logicalAssignment;
logicalAssignment ||= 42;
logicalAssignment &&= 'hello';
logicalAssignment ??= null;

export const numericSeparators = 1_234_456 + logicalAssignment;
