'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _iveB = require('ive-b');

var UserRoute = (function (_Route) {
	_inherits(UserRoute, _Route);

	function UserRoute(db) {
		_classCallCheck(this, UserRoute);

		_get(Object.getPrototypeOf(UserRoute.prototype), 'constructor', this).call(this, db);
	}

	_createDecoratedClass(UserRoute, [{
		key: 'login',
		decorators: [_iveB.Route.isRoute()],
		value: function login(res) {
			var data = arguments.length <= 1 || arguments[1] === undefined ? { name: '', pass: '' } : arguments[1];
			var user;
			return regeneratorRuntime.async(function login$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.queryOne('loginUser', [data.name, data.pass]));

					case 2:
						user = context$2$0.sent;

						if (user) {
							context$2$0.next = 5;
							break;
						}

						throw new Error('Invalid credentials.');

					case 5:
						this.getSession().setUser(user);
						res.reply('login', user);
						context$2$0.t0 = res;
						context$2$0.next = 10;
						return regeneratorRuntime.awrap(this.getAll());

					case 10:
						context$2$0.t1 = context$2$0.sent;
						context$2$0.t0.broadcast.call(context$2$0.t0, 'updateAll', context$2$0.t1);

					case 12:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'register',
		decorators: [_iveB.Route.isRoute()],
		value: function register(res) {
			var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			var user;
			return regeneratorRuntime.async(function register$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.createUser(data.name, data.pass1, data.pass2));

					case 2:
						user = context$2$0.sent;

						this.getSession().setUser(user);
						res.reply('register', user);
						context$2$0.t0 = res;
						context$2$0.next = 8;
						return regeneratorRuntime.awrap(this.getAll());

					case 8:
						context$2$0.t1 = context$2$0.sent;
						context$2$0.t0.broadcast.call(context$2$0.t0, 'updateAll', context$2$0.t1);

					case 10:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'setStatus',
		decorators: [_iveB.Route.isRoute()],
		value: function setStatus(res, data) {
			var user, text, online;
			return regeneratorRuntime.async(function setStatus$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						user = this.getSession().getUser();
						text = data.text;
						online = data.online;

						if (!user) {
							context$2$0.next = 14;
							break;
						}

						context$2$0.t0 = res;
						context$2$0.next = 7;
						return regeneratorRuntime.awrap(this.queryOne('setUserStatus', [user.id, text, online]));

					case 7:
						context$2$0.t1 = context$2$0.sent;
						context$2$0.t0.reply.call(context$2$0.t0, 'setStatus', context$2$0.t1);
						context$2$0.t2 = res;
						context$2$0.next = 12;
						return regeneratorRuntime.awrap(this.getAll());

					case 12:
						context$2$0.t3 = context$2$0.sent;
						context$2$0.t2.broadcast.call(context$2$0.t2, 'updateAll', context$2$0.t3);

					case 14:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'disconnect',
		decorators: [_iveB.Route.isRoute()],
		value: function disconnect(res, reason) {
			return regeneratorRuntime.async(function disconnect$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.setOffline(res));

					case 2:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'logout',
		decorators: [_iveB.Route.isRoute()],
		value: function logout(res) {
			return regeneratorRuntime.async(function logout$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.setOffline(res));

					case 2:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'existsUser',
		value: function existsUser(name) {
			return regeneratorRuntime.async(function existsUser$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.queryAffected('existsUser', [name]));

					case 2:
						context$2$0.t0 = context$2$0.sent;
						return context$2$0.abrupt('return', context$2$0.t0 > 0);

					case 4:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'createUser',
		value: function createUser(name, pass1, pass2) {
			return regeneratorRuntime.async(function createUser$(context$2$0) {
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
						return regeneratorRuntime.awrap(this.existsUser(name));

					case 14:
						if (!context$2$0.sent) {
							context$2$0.next = 16;
							break;
						}

						throw new Error('Username already exists.');

					case 16:
						context$2$0.next = 18;
						return regeneratorRuntime.awrap(this.queryOne('createUser', [name, pass1]));

					case 18:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 19:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'setOffline',
		value: function setOffline(res) {
			var user;
			return regeneratorRuntime.async(function setOffline$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						user = this.getSession().getUser();

						if (!user) {
							context$2$0.next = 14;
							break;
						}

						context$2$0.t0 = res;
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.queryAffected('logoutUser', [user.id]));

					case 5:
						context$2$0.t1 = context$2$0.sent;
						context$2$0.t2 = context$2$0.t1 == 1;
						context$2$0.t0.reply.call(context$2$0.t0, 'logout', context$2$0.t2);
						context$2$0.t3 = res;
						context$2$0.next = 11;
						return regeneratorRuntime.awrap(this.getAll());

					case 11:
						context$2$0.t4 = context$2$0.sent;
						context$2$0.t3.broadcast.call(context$2$0.t3, 'updateAll', context$2$0.t4);

						this.getSession().setUser(null);

					case 14:
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
						return regeneratorRuntime.awrap(this.queryAll('getAll'));

					case 2:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 3:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}]);

	return UserRoute;
})(_iveB.Route);

exports['default'] = UserRoute;
module.exports = exports['default'];