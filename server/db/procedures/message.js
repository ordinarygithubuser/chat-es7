'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _query = require('../query');

var _query2 = _interopRequireDefault(_query);

function purge() {
	return regeneratorRuntime.async(function purge$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS createMessage;'));

			case 2:
				context$1$0.next = 4;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS getMessageInterval;'));

			case 4:
				context$1$0.next = 6;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS createImageMessage;'));

			case 6:
				context$1$0.next = 8;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS getImage;'));

			case 8:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function createMessage() {
	return (0, _query2['default'])('CREATE PROCEDURE createMessage (IN id INT, IN userText VARCHAR(2000))\n\t\tBEGIN\n\t\t\tINSERT INTO message (user_id, text) VALUES (id, userText);\n\n\t\t\tSELECT m.id, m.text, m.created, m.file, u.id as user_id, u.name as owner\n\t\t\tFROM message m JOIN user u ON m.user_id = u.id\n\t\t\tWHERE m.id=LAST_INSERT_ID();\n\t\tEND');
}

function getMessageInterval() {
	return (0, _query2['default'])('CREATE PROCEDURE getMessageInterval (IN messageId INT)\n\t\tBEGIN\n\t\t\tDECLARE safeId INT;\n\n\t\t\tIF messageId < 1 THEN SET safeId = (SELECT MAX(id) AS id FROM message);\n\t\t\telse SET safeId = 0;\n\t\t\tEND IF;\n\n\t\t\tSELECT * FROM\n\t\t\t\t(SELECT m.id, m.text, m.created, m.file, u.id as user_id, u.name as owner\n\t\t\t\t FROM message m JOIN user u ON m.user_id = u.id\n\t\t\t\t WHERE m.id < messageId ORDER BY id DESC LIMIT 10) sub\n\t\t\tORDER BY id ASC;\n\t\tEND');
}

function createImage() {
	return (0, _query2['default'])('CREATE PROCEDURE createImageMessage (IN userId INT, IN name VARCHAR(300))\n\t\tBEGIN\n\t\t\tINSERT INTO message (user_id, text, file) VALUES (userId, "", name);\n\n\t\t\tSELECT m.id, m.text, m.created, m.file, u.id as user_id, u.name as owner\n\t\t\tFROM message m JOIN user u ON m.user_id = u.id\n\t\t\tWHERE m.id=LAST_INSERT_ID();\n\t\tEND');
}

exports['default'] = function createMessageProcedures(clean) {
	return regeneratorRuntime.async(function createMessageProcedures$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!clean) {
					context$1$0.next = 3;
					break;
				}

				context$1$0.next = 3;
				return regeneratorRuntime.awrap(purge());

			case 3:
				context$1$0.next = 5;
				return regeneratorRuntime.awrap(createMessage());

			case 5:
				context$1$0.next = 7;
				return regeneratorRuntime.awrap(getMessageInterval());

			case 7:
				context$1$0.next = 9;
				return regeneratorRuntime.awrap(createImage());

			case 9:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
};

module.exports = exports['default'];