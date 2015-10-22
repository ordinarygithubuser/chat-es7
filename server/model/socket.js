'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Socket = (function () {
	function Socket(io, socket) {
		var user = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

		_classCallCheck(this, Socket);

		this.io = io;
		this.socket = socket;
		this.reply = this.reply.bind(this);
		this.user = user;
	}

	_createClass(Socket, [{
		key: 'on',
		value: function on(event, handler) {
			var _this = this;

			this.socket.on(event, function callee$2$0(data) {
				return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
					while (1) switch (context$3$0.prev = context$3$0.next) {
						case 0:
							context$3$0.prev = 0;
							context$3$0.next = 3;
							return regeneratorRuntime.awrap(handler(data));

						case 3:
							context$3$0.next = 9;
							break;

						case 5:
							context$3$0.prev = 5;
							context$3$0.t0 = context$3$0['catch'](0);

							console.log('socket error:', context$3$0.t0);
							this.reply(event, null, context$3$0.t0);

						case 9:
						case 'end':
							return context$3$0.stop();
					}
				}, null, _this, [[0, 5]]);
			});
		}
	}, {
		key: 'reply',
		value: function reply(event, data, error) {
			var con = this.getConnection();
			if (con) con.emit(event, error, data);
		}
	}, {
		key: 'getConnection',
		value: function getConnection() {
			return this.io.sockets.connected[this.socket.id];
		}
	}, {
		key: 'send',
		value: function send(event, data, error) {
			return this.io.sockets.emit(event, error, data);
		}
	}]);

	return Socket;
})();

exports['default'] = Socket;
module.exports = exports['default'];