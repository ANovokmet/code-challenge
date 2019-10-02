const encoder = require('./encoder');

test('example input encodes correctly', () => {
	expect(encoder('XXXYYYYZZQXX')).toBe('X3Y4Z2Q1X2');
});

test('lower case encodes different as upper', () => {
	expect(encoder('xxXXXaaaAAAA')).toBe('x2X3a3A4');
});

test('same letter string encodes correctly', () => {
	expect(encoder('xxxxxx')).toBe('x6');
});

test('empty string encodes to empty', () => {
	expect(encoder('')).toBe('');
});