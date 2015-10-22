'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _imageWriter = require('./image-writer');

var _imageWriter2 = _interopRequireDefault(_imageWriter);

var _dbModel = require('./db-model');

var _dbModel2 = _interopRequireDefault(_dbModel);

var Message = (function (_DBModel) {
	_inherits(Message, _DBModel);

	function Message(conf) {
		_classCallCheck(this, Message);

		_get(Object.getPrototypeOf(Message.prototype), 'constructor', this).call(this);
		this.writer = new _imageWriter2['default'](conf.IMAGE_PATH);
	}

	_createClass(Message, [{
		key: 'create',
		value: function create(user, text) {
			var res;
			return regeneratorRuntime.async(function create$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.call('createMessage', [user.id, text]));

					case 2:
						res = context$2$0.sent;
						return context$2$0.abrupt('return', res.rows[0][0]);

					case 4:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'createImage',
		value: function createImage(user, raw, type) {
			var name, res;
			return regeneratorRuntime.async(function createImage$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return regeneratorRuntime.awrap(this.writer.write(raw, type));

					case 2:
						name = context$2$0.sent;
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.call('createImageMessage', [user.id, 'img/' + name]));

					case 5:
						res = context$2$0.sent;
						return context$2$0.abrupt('return', res.rows[0][0]);

					case 7:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'getLatest',
		value: function getLatest(id) {
			var res;
			return regeneratorRuntime.async(function getLatest$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						if (!id || id < 1) id = 999999;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.call('getMessageInterval', [id]));

					case 3:
						res = context$2$0.sent;
						return context$2$0.abrupt('return', res.rows[0]);

					case 5:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}]);

	return Message;
})(_dbModel2['default']);

exports['default'] = Message;
module.exports = exports['default'];