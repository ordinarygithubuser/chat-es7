'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _iveB = require('ive-b');

var UserTable = (function () {
	function UserTable(db) {
		_classCallCheck(this, UserTable);

		this.db = db;

		this.table = new _iveB.Table('user', { name: 'name', type: new _iveB.Types.Varchar(20), req: true }, { name: 'pass', type: new _iveB.Types.Varchar(30), req: true }, { name: 'status', type: new _iveB.Types.Varchar(20, '"Hi, i am new!"') }, { name: 'online', type: new _iveB.Types.Boolean('FALSE') });
	}

	_createClass(UserTable, [{
		key: 'install',
		value: function install() {
			return regeneratorRuntime.async(function install$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.db.execute(this.table.toSQL()));

					case 2:
						context$2$0.next = 4;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS existsUser;'));

					case 4:
						context$2$0.next = 6;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS createUser;'));

					case 6:
						context$2$0.next = 8;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS getUser;'));

					case 8:
						context$2$0.next = 10;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS loginUser;'));

					case 10:
						context$2$0.next = 12;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS logoutUser;'));

					case 12:
						context$2$0.next = 14;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS setUserStatus;'));

					case 14:
						context$2$0.next = 16;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS getAll;'));

					case 16:
						context$2$0.next = 18;
						return regeneratorRuntime.awrap(this.createUser());

					case 18:
						context$2$0.next = 20;
						return regeneratorRuntime.awrap(this.loginUser());

					case 20:
						context$2$0.next = 22;
						return regeneratorRuntime.awrap(this.logoutUser());

					case 22:
						context$2$0.next = 24;
						return regeneratorRuntime.awrap(this.existsUser());

					case 24:
						context$2$0.next = 26;
						return regeneratorRuntime.awrap(this.setUserStatus());

					case 26:
						context$2$0.next = 28;
						return regeneratorRuntime.awrap(this.getAll());

					case 28:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'clean',
		value: function clean() {
			return regeneratorRuntime.async(function clean$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.db.execute('DROP TABLE IF EXISTS user;'));

					case 2:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'existsUser',
		value: function existsUser() {
			return this.db.execute('CREATE PROCEDURE existsUser(IN name VARCHAR(30))\n\t\tBEGIN\n\t\t\tSELECT * FROM user u WHERE u.name=name;\n\t\tEND');
		}
	}, {
		key: 'createUser',
		value: function createUser() {
			return this.db.execute('CREATE PROCEDURE createUser (IN name VARCHAR(30), IN pass VARCHAR(30))\n\t\tBEGIN\n\t\t\tINSERT INTO user (name, pass, online, status) VALUES (name, pass, 1, "hi, i am new");\n\t\t\tSELECT * FROM user WHERE user.id=LAST_INSERT_ID();\n\t\tEND');
		}
	}, {
		key: 'getUser',
		value: function getUser() {
			return this.db.execute('CREATE PROCEDURE getUser (IN userId INT)\n\t\tBEGIN\n\t\t\tSELECT * FROM user WHERE id=userId;\n\t\tEND');
		}
	}, {
		key: 'loginUser',
		value: function loginUser() {
			return this.db.execute('CREATE PROCEDURE loginUser (IN name VARCHAR(30), IN pass VARCHAR(30))\n\t\tBEGIN\n\t\t\tUPDATE user u SET online=1 WHERE u.name=name AND u.pass=pass;\n\t\t\tSELECT * FROM user u WHERE u.name=name AND u.pass=pass;\n\t\tEND');
		}
	}, {
		key: 'logoutUser',
		value: function logoutUser() {
			return this.db.execute('CREATE PROCEDURE logoutUser (IN userId INT)\n\t\tBEGIN\n\t\t\tUPDATE user SET online=0 WHERE id=userId;\n\t\tEND');
		}
	}, {
		key: 'setUserStatus',
		value: function setUserStatus() {
			return this.db.execute('CREATE PROCEDURE setUserStatus (IN userId INT, IN status VARCHAR(140), IN online INT)\n\t\tBEGIN\n\t\t\tUPDATE user u SET u.status=status, u.online=online WHERE u.id=userId;\n\t\t\tSELECT * FROM user WHERE id=userId;\n\t\tEND');
		}
	}, {
		key: 'getAll',
		value: function getAll() {
			return this.db.execute('CREATE PROCEDURE getAll ()\n\t\tBEGIN\n\t\t\tSELECT id, name, online, status FROM user ORDER BY online DESC, name;\n\t\tEND');
		}
	}]);

	return UserTable;
})();

exports['default'] = UserTable;
module.exports = exports['default'];