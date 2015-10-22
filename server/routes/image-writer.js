'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

var ImageWriter = (function () {
	function ImageWriter() {
		var path = arguments.length <= 0 || arguments[0] === undefined ? __dirname : arguments[0];
		var size = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

		_classCallCheck(this, ImageWriter);

		this.path = path;
		this.size = size;
		this.alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_=()&$!';
	}

	_createClass(ImageWriter, [{
		key: 'getRandomPath',
		value: function getRandomPath(type) {
			var alph, name, i;
			return regeneratorRuntime.async(function getRandomPath$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						alph = this.alph;
						name = '';

						for (i = 0; i < this.size; i++) {
							name += alph[Math.round(Math.random() * alph.length)];
						}
						name += '.' + type;
						context$2$0.next = 6;
						return regeneratorRuntime.awrap(this.exists(name));

					case 6:
						if (!context$2$0.sent) {
							context$2$0.next = 12;
							break;
						}

						context$2$0.next = 9;
						return regeneratorRuntime.awrap(this.getRandomPath(type));

					case 9:
						context$2$0.t0 = context$2$0.sent;
						context$2$0.next = 13;
						break;

					case 12:
						context$2$0.t0 = name;

					case 13:
						return context$2$0.abrupt('return', context$2$0.t0);

					case 14:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'exists',
		value: function exists(name) {
			return regeneratorRuntime.async(function exists$(context$2$0) {
				var _this = this;

				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						return context$2$0.abrupt('return', new Promise(function (resolve, reject) {
							_fs2['default'].exists(_this.path + name, function (err, exists) {
								return err ? reject(err) : resolve(exists);
							});
						}));

					case 1:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}, {
		key: 'write',
		value: function write(data, encoding) {
			var type, name;
			return regeneratorRuntime.async(function write$(context$2$0) {
				var _this2 = this;

				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						type = _mime2['default'].extension(encoding);
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.getRandomPath(type));

					case 3:
						name = context$2$0.sent;
						return context$2$0.abrupt('return', new Promise(function (resolve, reject) {
							_fs2['default'].writeFile(_this2.path + name, data, { encoding: 'binary' }, function (err) {
								return err ? reject(err) : resolve(name);
							});
						}));

					case 5:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}]);

	return ImageWriter;
})();

exports['default'] = ImageWriter;
module.exports = exports['default'];