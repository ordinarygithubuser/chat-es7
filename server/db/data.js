'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Data = (function () {
	function Data(db) {
		_classCallCheck(this, Data);

		this.db = db;
	}

	_createClass(Data, [{
		key: 'install',
		value: function install(prod) {
			return regeneratorRuntime.async(function install$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.db.execute('DELETE FROM user WHERE name="test" AND pass="test";'));

					case 2:
						context$2$0.next = 4;
						return regeneratorRuntime.awrap(this.db.execute('DELETE FROM user WHERE name="admin" AND pass="root";'));

					case 4:
						context$2$0.next = 6;
						return regeneratorRuntime.awrap(this.db.call('createUser', ['alex', 'salival2']));

					case 6:
						context$2$0.next = 8;
						return regeneratorRuntime.awrap(this.db.call('createUser', ['shadoka', 'derpster']));

					case 8:
						if (prod) {
							context$2$0.next = 39;
							break;
						}

						context$2$0.next = 11;
						return regeneratorRuntime.awrap(this.db.call('createUser', ['test', 'test']));

					case 11:
						context$2$0.next = 13;
						return regeneratorRuntime.awrap(this.db.call('createUser', ['admin', 'root']));

					case 13:
						context$2$0.next = 15;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [1, 'test msg']));

					case 15:
						context$2$0.next = 17;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [2, 'test reply']));

					case 17:
						context$2$0.next = 19;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [1, 'well, well...']));

					case 19:
						context$2$0.next = 21;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [1, 'lorem ipsum text']));

					case 21:
						context$2$0.next = 23;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [2, 'msg number 5']));

					case 23:
						context$2$0.next = 25;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [2, 'connection test']));

					case 25:
						context$2$0.next = 27;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [2, 'fill messages']));

					case 27:
						context$2$0.next = 29;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [1, 'function test() { return args; }']));

					case 29:
						context$2$0.next = 31;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [2, 'export default async safe data => data.msg;']));

					case 31:
						context$2$0.next = 33;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [1, '10th message']));

					case 33:
						context$2$0.next = 35;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [2, 'history request']));

					case 35:
						context$2$0.next = 37;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [1, 'last']));

					case 37:
						context$2$0.next = 39;
						return regeneratorRuntime.awrap(this.db.call('createMessage', [2, 'but not least']));

					case 39:
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
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}]);

	return Data;
})();

exports['default'] = Data;
module.exports = exports['default'];