'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _iveB = require('ive-b');

var _imageWriter = require('./image-writer');

var _imageWriter2 = _interopRequireDefault(_imageWriter);

var MessageRoute = (function (_Route) {
	_inherits(MessageRoute, _Route);

	function MessageRoute(db, conf) {
		_classCallCheck(this, MessageRoute);

		_get(Object.getPrototypeOf(MessageRoute.prototype), 'constructor', this).call(this, db);
		this.writer = new _imageWriter2['default'](conf.ImagePath);
	}

	_createDecoratedClass(MessageRoute, [{
		key: 'send',
		decorators: [_iveB.Route.isRoute()],
		value: function send(res) {
			var data = arguments.length <= 1 || arguments[1] === undefined ? { text: '' } : arguments[1];
			var user, message;
			return regeneratorRuntime.async(function send$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						user = this.getSession().getUser();
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.queryOne('createMessage', [user.id, data.text]));

					case 3:
						message = context$2$0.sent;

						res.broadcast('send', message);

					case 5:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'getInterval',
		decorators: [_iveB.Route.isRoute()],
		value: function getInterval(res) {
			var data = arguments.length <= 1 || arguments[1] === undefined ? { id: 999999 } : arguments[1];
			var messages;
			return regeneratorRuntime.async(function getInterval$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.queryAll('getMessageInterval', [data.id]));

					case 2:
						messages = context$2$0.sent;

						res.reply('getInterval', messages);

					case 4:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'image',
		decorators: [_iveB.Route.isRoute()],
		value: function image(res) {
			var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			var user, name, message;
			return regeneratorRuntime.async(function image$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						user = this.getSession().getUser();
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.writer.write(data.raw, data.type));

					case 3:
						name = context$2$0.sent;
						context$2$0.next = 6;
						return regeneratorRuntime.awrap(this.queryOne('createImageMessage', [user.id, 'img/' + name]));

					case 6:
						message = context$2$0.sent;

						res.reply('send', message);

					case 8:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}]);

	return MessageRoute;
})(_iveB.Route);

exports['default'] = MessageRoute;
module.exports = exports['default'];