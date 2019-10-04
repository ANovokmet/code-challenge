const express = require('express');
const router = express.Router();

router.use('/', express.static(__dirname + '/dist/app'))
router.get('*', function (req, res) {
	res.sendFile(__dirname + '/dist/app/index.html');
});

module.exports = router;