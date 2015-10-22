'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _query = require('../query');

var _query2 = _interopRequireDefault(_query);

exports['default'] = function install() {
	return regeneratorRuntime.async(function install$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!clean) {
					context$1$0.next = 3;
					break;
				}

				context$1$0.next = 3;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP TABLE IF EXISTS message;'));

			case 3:
				context$1$0.next = 5;
				return regeneratorRuntime.awrap((0, _query2['default'])('CREATE TABLE IF NOT EXISTS message (\n\t\tid \t\t\tINT(11) \t\tNOT NULL AUTO_INCREMENT,\n\t\tuser_id \tINT(11) \t\tNOT NULL,\n\t\tfile\t\tVARCHAR(300),\n\t\ttext \t\tVARCHAR(2000) \tNOT NULL,\n\t\tcreated \tTIMESTAMP \t\tNOT NULL DEFAULT CURRENT_TIMESTAMP,\n\t\tPRIMARY KEY (id),\n\t\tFOREIGN KEY (user_id)  REFERENCES user(id)\n\t)'));

			case 5:
				return context$1$0.abrupt('return', context$1$0.sent);

			case 6:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
};

module.exports = exports['default'];