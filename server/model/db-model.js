'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dbQuery = require('../db/query');

var _dbQuery2 = _interopRequireDefault(_dbQuery);

var DBModel = function DBModel() {
	_classCallCheck(this, DBModel);

	this.query = _dbQuery2['default'];
	this.call = _dbQuery.call;
};

exports['default'] = DBModel;
module.exports = exports['default'];