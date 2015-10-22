'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

exports['default'] = function install(db) {
	var conf = arguments.length <= 1 || arguments[1] === undefined ? { clean: true, prod: false } : arguments[1];
	var userTable, messageTable, clean, prod;
	return regeneratorRuntime.async(function install$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				userTable = new _user2['default'](db);
				messageTable = new _message2['default'](db);
				clean = conf.clean;
				prod = conf.prod;
				context$1$0.prev = 4;

				if (!clean) {
					context$1$0.next = 10;
					break;
				}

				context$1$0.next = 8;
				return regeneratorRuntime.awrap(messageTable.clean());

			case 8:
				context$1$0.next = 10;
				return regeneratorRuntime.awrap(userTable.clean());

			case 10:
				context$1$0.next = 12;
				return regeneratorRuntime.awrap(userTable.install());

			case 12:
				context$1$0.next = 14;
				return regeneratorRuntime.awrap(messageTable.install());

			case 14:
				context$1$0.next = 16;
				return regeneratorRuntime.awrap((0, _data2['default'])(prod));

			case 16:
				console.log('Database Setup completed.');
				context$1$0.next = 22;
				break;

			case 19:
				context$1$0.prev = 19;
				context$1$0.t0 = context$1$0['catch'](4);

				console.log('Error on Database setup:', context$1$0.t0);

			case 22:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[4, 19]]);
};

module.exports = exports['default'];