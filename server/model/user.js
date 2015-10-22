'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var User = (function (_DBModel) {
	_inherits(User, _DBModel);

	function User() {
		_classCallCheck(this, User);

		_get(Object.getPrototypeOf(User.prototype), 'constructor', this).call(this);
	}

	_createClass(User, [{
		key: 'exists',
		value: function exists(name) {
			return regeneratorRuntime.async(function exists$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.query.getAll('existsUser', [name]));

					case 2:
						context$2$0.t0 = context$2$0.sent.length;
						return context$2$0.abrupt('return', context$2$0.t0 > 0);

					case 4:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'create',
		value: function create(name, pass) {
			return regeneratorRuntime.async(function create$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.query.getOne('createUser', [name, pass]));

					case 2:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 3:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'login',
		value: function login(name, pass) {
			return regeneratorRuntime.async(function login$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.query.getOne('loginUser', [name, pass]));

					case 2:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 3:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'logout',
		value: function logout(userId) {
			return regeneratorRuntime.async(function logout$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.query.call('logoutUser', [userId]));

					case 2:
						context$2$0.t0 = context$2$0.sent.rows.affectedRows;
						return context$2$0.abrupt('return', context$2$0.t0 == 1);

					case 4:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'register',
		value: function register(name, pass1, pass2) {
			return regeneratorRuntime.async(function register$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						if (!(name.length < 3)) {
							context$2$0.next = 4;
							break;
						}

						throw new Error('The name must be at least 4 characters long.');

					case 4:
						if (!(pass1.length < 3)) {
							context$2$0.next = 8;
							break;
						}

						throw new Error('The password must be at least 4 characters long.');

					case 8:
						if (!(pass1 !== pass2)) {
							context$2$0.next = 12;
							break;
						}

						throw new Error('The passwords do not match.');

					case 12:
						context$2$0.next = 14;
						return regeneratorRuntime.awrap(this.exists(name));

					case 14:
						if (!context$2$0.sent) {
							context$2$0.next = 18;
							break;
						}

						throw new Error('Username already exists.');

					case 18:
						context$2$0.next = 20;
						return regeneratorRuntime.awrap(this.create(name, pass1));

					case 20:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 21:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'setStatus',
		value: function setStatus(userId, text, online) {
			return regeneratorRuntime.async(function setStatus$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.query.getOne('setUserStatus', [userId, text, online]));

					case 2:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 3:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'getAll',
		value: function getAll() {
			return regeneratorRuntime.async(function getAll$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.query.getAll('getAll'));

					case 2:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 3:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}]);

	return User;
})(_model2['default']);

exports['default'] = User;
module.exports = exports['default'];