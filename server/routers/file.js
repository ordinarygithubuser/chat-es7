'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _modelReader = require('../model/reader');

var router = _express2['default'].Router();

router.post('/getDir', function (req, res) {
	var path = req.body.file.path;

	(0, _modelReader.readDir)(path, function (error, files) {
		res.json({ error: error, files: files });
	});
});

exports['default'] = router;
module.exports = exports['default'];