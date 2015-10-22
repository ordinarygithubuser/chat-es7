'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _query = require('../query');

var _query2 = _interopRequireDefault(_query);

function clean() {
	return regeneratorRuntime.async(function clean$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS createImage;'));

			case 2:
				context$1$0.next = 4;
				return regeneratorRuntime.awrap((0, _query2['default'])('DROP PROCEDURE IF EXISTS getImage;'));

			case 4:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function createImage() {
	return (0, _query2['default'])('CREATE PROCEDURE createImage (IN name VARCHAR(300), IN raw LONGBLOB)\n\t\tBEGIN\n\t\t\tINSERT INTO image (name, raw) VALUES (name, raw);\n\t\t\tSELECT * FROM image WHERE id=LAST_INSERT_ID();\n\t\tEND');
}

function getImage() {
	return (0, _query2['default'])('CREATE PROCEDURE getImage (IN imageId INT)\n\t\tBEGIN\n\t\t\tSELECT * FROM image WHERE id=imageId;\n\t\tEND');
}

exports['default'] = function createImageProcedures() {
	return regeneratorRuntime.async(function createImageProcedures$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return regeneratorRuntime.awrap(clean());

			case 2:
				context$1$0.next = 4;
				return regeneratorRuntime.awrap(createImage());

			case 4:
				context$1$0.next = 6;
				return regeneratorRuntime.awrap(getImage());

			case 6:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
};

module.exports = exports['default'];