'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.readDir = readDir;
exports.readMetadata = readMetadata;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _musicmetadata = require('musicmetadata');

var _musicmetadata2 = _interopRequireDefault(_musicmetadata);

function getType(path) {
	var typeStart = path.lastIndexOf('.') + 1;
	return path.substr(typeStart, path.length);
}

function filterMP3(files) {
	return files.filter(function (file) {
		return file.type === 'dir' || getType(file.path) === 'mp3';
	});
}

function createFiles(files, parentPath) {
	return files.map(function (name) {
		var path = parentPath + name;
		var type = _fs2['default'].statSync(path).isFile() ? 'file' : 'dir';
		if (type == 'dir') path += '\\';
		return { name: name, path: path, type: type };
	});
}

function readDir(parentPath, done) {
	_fs2['default'].readdir(parentPath, function (error, files) {
		done(error, filterMP3(createFiles(files, parentPath)));
	});
}

function readMetadata(file, done) {
	(0, _musicmetadata2['default'])(_fs2['default'].createReadStream(file.path), function (error, metadata) {
		done(error, metadata);
	});
}