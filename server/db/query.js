'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _conf = require('../conf');

var _conf2 = _interopRequireDefault(_conf);

function isDate(date) {
	return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
}

function format(arg) {
	var result = '';

	if (isNaN(arg)) {
		if (isDate(arg) || typeof arg == 'string') result = '"' + arg + '"';else result = _mysql2['default'].escape(arg);
	} else {
		result = arg;
	}
	return result + ', ';
}

function formatAll(args) {
	var argString = '';

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var arg = _step.value;

			argString += format(arg);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	if (args.length > 0) {
		argString = argString.substring(0, argString.length - 2);
	}
	return argString;
}

exports['default'] = new ((function () {
	function Query() {
		_classCallCheck(this, Query);
	}

	_createClass(Query, [{
		key: 'getOne',
		value: function getOne(procedure, args) {
			var res;
			return regeneratorRuntime.async(function getOne$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.call(procedure, args));

					case 2:
						res = context$2$0.sent;
						return context$2$0.abrupt('return', res.rows[0][0]);

					case 4:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'getAll',
		value: function getAll(procedure, args) {
			var res;
			return regeneratorRuntime.async(function getAll$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.call(procedure, args));

					case 2:
						res = context$2$0.sent;
						return context$2$0.abrupt('return', res.rows[0]);

					case 4:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'call',
		value: function call(procedure) {
			var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
			return regeneratorRuntime.async(function call$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.execute('CALL ' + procedure + '(' + formatAll(args) + ')'));

					case 2:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 3:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'execute',
		value: function execute(statement) {
			var con = _mysql2['default'].createConnection(_conf2['default'].DATABASE);

			return new Promise(function (resolve, reject) {
				con.query(statement, function (err, rows, fields) {
					if (err) {
						con.destroy();
						reject(err);
					} else {
						// TODO: is this ever destructed?
						con.end(function () {
							return resolve({ rows: rows, fields: fields });
						});
					}
				});
			});
		}
	}]);

	return Query;
})())();
module.exports = exports['default'];