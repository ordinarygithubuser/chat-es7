'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _iveB = require('ive-b');

var MessageTable = (function () {
	function MessageTable(db) {
		_classCallCheck(this, MessageTable);

		this.db = db;

		this.table = new _iveB.Table('message', { name: 'user_id', type: new _iveB.Types.Integer(11), ref: 'user' }, { name: 'file', type: new _iveB.Types.Varchar(300) }, { name: 'text', type: new _iveB.Types.Varchar(5000) }, { name: 'created', type: new _iveB.Types.Date('CURRENT_TIMESTAMP')
		});
	}

	_createClass(MessageTable, [{
		key: 'install',
		value: function install() {
			return regeneratorRuntime.async(function install$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.db.execute(this.table.toSQL()));

					case 2:
						context$2$0.next = 4;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS createMessage;'));

					case 4:
						context$2$0.next = 6;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS getMessageInterval;'));

					case 6:
						context$2$0.next = 8;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS createImageMessage;'));

					case 8:
						context$2$0.next = 10;
						return regeneratorRuntime.awrap(this.db.execute('DROP PROCEDURE IF EXISTS getImage;'));

					case 10:
						context$2$0.next = 12;
						return regeneratorRuntime.awrap(this.createMessage());

					case 12:
						context$2$0.next = 14;
						return regeneratorRuntime.awrap(this.getMessageInterval());

					case 14:
						context$2$0.next = 16;
						return regeneratorRuntime.awrap(this.createImage());

					case 16:
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
						return regeneratorRuntime.awrap(this.db.execute('DROP TABLE IF EXISTS message;'));

					case 2:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'createMessage',
		value: function createMessage() {
			return this.db.execute('CREATE PROCEDURE createMessage (IN id INT, IN userText VARCHAR(2000))\n\t\tBEGIN\n\t\t\tINSERT INTO message (user_id, text) VALUES (id, userText);\n\n\t\t\tSELECT m.id, m.text, m.created, m.file, u.id as user_id, u.name as owner\n\t\t\tFROM message m JOIN user u ON m.user_id = u.id\n\t\t\tWHERE m.id=LAST_INSERT_ID();\n\t\tEND');
		}
	}, {
		key: 'getMessageInterval',
		value: function getMessageInterval() {
			return this.db.execute('CREATE PROCEDURE getMessageInterval (IN messageId INT)\n\t\tBEGIN\n\t\t\tDECLARE safeId INT;\n\n\t\t\tIF messageId < 1 THEN SET safeId = (SELECT MAX(id) AS id FROM message);\n\t\t\telse SET safeId = 0;\n\t\t\tEND IF;\n\n\t\t\tSELECT * FROM\n\t\t\t\t(SELECT m.id, m.text, m.created, m.file, u.id as user_id, u.name as owner\n\t\t\t\t FROM message m JOIN user u ON m.user_id = u.id\n\t\t\t\t WHERE m.id < messageId ORDER BY id DESC LIMIT 10) sub\n\t\t\tORDER BY id ASC;\n\t\tEND');
		}
	}, {
		key: 'createImage',
		value: function createImage() {
			return this.db.execute('CREATE PROCEDURE createImageMessage (IN userId INT, IN name VARCHAR(300))\n\t\tBEGIN\n\t\t\tINSERT INTO message (user_id, text, file) VALUES (userId, "", name);\n\n\t\t\tSELECT m.id, m.text, m.created, m.file, u.id as user_id, u.name as owner\n\t\t\tFROM message m JOIN user u ON m.user_id = u.id\n\t\t\tWHERE m.id=LAST_INSERT_ID();\n\t\tEND');
		}
	}]);

	return MessageTable;
})();

exports['default'] = MessageTable;
module.exports = exports['default'];