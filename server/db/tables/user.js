'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _query = require('../query');

var _query2 = _interopRequireDefault(_query);

exports['default'] = function createUserTable(clean) {
	return regeneratorRuntime.async(function createUserTable$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!clean) {
					context$1$0.next = 3;
					break;
				}

				context$1$0.next = 3;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP TABLE IF EXISTS user;'));

			case 3:
				context$1$0.next = 5;
				return regeneratorRuntime.awrap((0, _query2['default'])('CREATE TABLE IF NOT EXISTS user (\n\t\tid \t\tINT(11) \t\tNOT NULL AUTO_INCREMENT,\n\t\tname \tVARCHAR(25) \tNOT NULL UNIQUE,\n\t\tpass \tVARCHAR(25) \tNOT NULL,\n\t\tonline \tINT(4) \t\t\tNOT NULL DEFAULT 0,\n\t\tstatus  VARCHAR(140),\n\t\tPRIMARY KEY (id)\n\t)'));

			case 5:
				return context$1$0.abrupt('return', context$1$0.sent);

			case 6:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
};

module.exports = exports['default'];