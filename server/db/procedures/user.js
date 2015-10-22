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
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS existsUser;'));

			case 2:
				context$1$0.next = 4;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS createUser;'));

			case 4:
				context$1$0.next = 6;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS getUser;'));

			case 6:
				context$1$0.next = 8;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS loginUser;'));

			case 8:
				context$1$0.next = 10;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS logoutUser;'));

			case 10:
				context$1$0.next = 12;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS setUserStatus;'));

			case 12:
				context$1$0.next = 14;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS getAll;'));

			case 14:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function existsUser() {
	return (0, _query2['default'])('CREATE PROCEDURE existsUser(IN name VARCHAR(30))\n\t\tBEGIN\n\t\t\tSELECT * FROM user u WHERE u.name=name;\n\t\tEND');
}

function createUser() {
	return (0, _query2['default'])('CREATE PROCEDURE createUser (IN name VARCHAR(30), IN pass VARCHAR(30))\n\t\tBEGIN\n\t\t\tINSERT INTO user (name, pass, online, status) VALUES (name, pass, 1, "hi, i am new");\n\t\t\tSELECT * FROM user WHERE user.id=LAST_INSERT_ID();\n\t\tEND');
}

function getUser() {
	return (0, _query2['default'])('CREATE PROCEDURE getUser (IN userId INT)\n\t\tBEGIN\n\t\t\tSELECT * FROM user WHERE id=userId;\n\t\tEND');
}

function loginUser() {
	return (0, _query2['default'])('CREATE PROCEDURE loginUser (IN name VARCHAR(30), IN pass VARCHAR(30))\n\t\tBEGIN\n\t\t\tUPDATE user u SET online=1 WHERE u.name=name AND u.pass=pass;\n\t\t\tSELECT * FROM user u WHERE u.name=name AND u.pass=pass;\n\t\tEND');
}

function logoutUser() {
	return (0, _query2['default'])('CREATE PROCEDURE logoutUser (IN userId INT)\n\t\tBEGIN\n\t\t\tUPDATE user SET online=0 WHERE id=userId;\n\t\tEND');
}

function setUserStatus() {
	return (0, _query2['default'])('CREATE PROCEDURE setUserStatus (IN userId INT, IN status VARCHAR(140), IN online INT)\n\t\tBEGIN\n\t\t\tUPDATE user u SET u.status=status, u.online=online WHERE u.id=userId;\n\t\t\tSELECT * FROM user WHERE id=userId;\n\t\tEND');
}

function getAll() {
	return (0, _query2['default'])('CREATE PROCEDURE getAll ()\n\t\tBEGIN\n\t\t\tSELECT id, name, online, status FROM user ORDER BY online DESC, name;\n\t\tEND');
}

exports['default'] = function createUserProcedures(clean) {
	return regeneratorRuntime.async(function createUserProcedures$(context$1$0) {
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
				return regeneratorRuntime.awrap(createUser());

			case 5:
				context$1$0.next = 7;
				return regeneratorRuntime.awrap(loginUser());

			case 7:
				context$1$0.next = 9;
				return regeneratorRuntime.awrap(logoutUser());

			case 9:
				context$1$0.next = 11;
				return regeneratorRuntime.awrap(existsUser());

			case 11:
				context$1$0.next = 13;
				return regeneratorRuntime.awrap(setUserStatus());

			case 13:
				context$1$0.next = 15;
				return regeneratorRuntime.awrap(getAll());

			case 15:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
};

module.exports = exports['default'];