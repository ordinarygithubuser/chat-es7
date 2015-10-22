'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function createUser() {
	return (0, _query2['default'])('CREATE TABLE IF NOT EXISTS user (\n\t\t\tid int(11) NOT NULL AUTO_INCREMENT,\n\t\t\tname VARCHAR(25) NOT NULL UNIQUE,\n\t\t\tpass VARCHAR(25) NOT NULL,\n\t\t\tonline int(4) DEFAULT FALSE NOT NULL,\n\t\t\tPRIMARY KEY (id)\n\t\t)');
}

function createMessages() {
	return (0, _query2['default'])('CREATE TABLE IF NOT EXISTS message (\n\t\tid int(11) NOT NULL AUTO_INCREMENT,\n\t\tuser_id int(11) NOT NULL,\n\t\ttext VARCHAR(2000) NOT NULL,\n\t\tcreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n\t\tPRIMARY KEY (id),\n\t\tFOREIGN KEY (user_id) REFERENCES user(id)\n\t)');
}

exports['default'] = function createTables() {
	return regeneratorRuntime.async(function createTables$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return regeneratorRuntime.awrap(createUser());

			case 2:
				context$1$0.next = 4;
				return regeneratorRuntime.awrap(createMessages());

			case 4:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
};

module.exports = exports['default'];