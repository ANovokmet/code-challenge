module.exports = function encoder(input) {
	let output = '';
	let count = 1;
	let previous = input[0];
	for (let i = 1; i < input.length + 1; i++) {
		const current = input[i];
		if (previous !== current) {
			output += previous + count;
			previous = current;
			count = 1;
		}
		else {
			count += 1;
		}
	}

	return output;
};