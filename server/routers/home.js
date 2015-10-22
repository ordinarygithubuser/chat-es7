'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var router = _express2['default'].Router();

router.get('/', function (req, res) {
	res.sendFile(app.locals.client + '/index.html');
});

router.get('/admin', function (req, res) {
	res.json({ fuck: 'you' });
});

exports['default'] = router;
module.exports = exports['default'];