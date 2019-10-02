const encoder = require('./services/encoder')
module.exports = function encode(req, res) {
	const { input } = req.body;
	const result = encoder(input);

	return res.send({result});
}
