'use strict';

var _this = this;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _iveB = require('ive-b');

var _dbSetup = require('./db/setup');

var _dbSetup2 = _interopRequireDefault(_dbSetup);

var _conf = require('./conf');

var _conf2 = _interopRequireDefault(_conf);

var _routesUser = require('./routes/user');

var _routesUser2 = _interopRequireDefault(_routesUser);

var _routesMessage = require('./routes/message');

var _routesMessage2 = _interopRequireDefault(_routesMessage);

var _dbUser = require('./db/user');

var _dbUser2 = _interopRequireDefault(_dbUser);

var _dbMessage = require('./db/message');

var _dbMessage2 = _interopRequireDefault(_dbMessage);

var _dbData = require('./db/data');

var _dbData2 = _interopRequireDefault(_dbData);

var server = new _iveB.Server(_conf2['default']);

server.start(function callee$0$0() {
	return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return regeneratorRuntime.awrap(server.setupTables(_dbUser2['default'], _dbMessage2['default'], _dbData2['default']));

			case 2:
				server.setRoutes(_routesUser2['default'], _routesMessage2['default']);
				console.log('Chat started.');

			case 4:
			case 'end':
				return context$1$0.stop();
		}
	}, null, _this);
});