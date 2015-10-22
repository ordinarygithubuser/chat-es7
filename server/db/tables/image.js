'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _query = require('../query');

var _query2 = _interopRequireDefault(_query);

exports['default'] = function createImageTable() {
	return regeneratorRuntime.async(function createImageTable$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return regeneratorRuntime.awrap((0, _query2['default'])('CREATE TABLE IF NOT EXISTS image (\n\t\tid \t\t\tINT(11) \t\tNOT NULL AUTO_INCREMENT,\n\t\tname \t\tVARCHAR(300) \tNOT NULL,\n\t\turl \t\tVARCHAR(2000) \tNOT NULL,\n\t\tPRIMARY KEY (id)\n\t)'));

			case 2:
				return context$1$0.abrupt('return', context$1$0.sent);

			case 3:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
};

module.exports = exports['default'];