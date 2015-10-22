'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _modelReader = require('../model/reader');

var router = _express2['default'].Router();

router.post('/metadata', function (req, res) {
	var file = req.body.file;

	(0, _modelReader.readMetadata)(file, function (error, metadata) {
		metadata.path = file.path;
		res.json({ error: error, metadata: metadata });
	});
});

router.get('/audio/:path', function (req, res) {
	var stream = _fs2['default'].createReadStream(req.params.path);

	stream.on('error', function (error) {
		console.log('Streaming error: ', error);
		stream.close();
	});
	stream.pipe(res);
});

exports['default'] = router;
module.exports = exports['default'];