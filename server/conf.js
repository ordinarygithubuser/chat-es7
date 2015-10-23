'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var ClientPath = __dirname.replace('server', 'client');
var ImagePath = ClientPath + '\\img\\';
var MainFile = ClientPath + '\\index.html';

var Database = {
	host: 'localhost',
	port: 3306,
	user: 'chat-admin',
	database: 'chat',
	password: '1234'
};

var Session = {
	user: null
};

var Server = {
	port: 3000,
	clean: true,
	prod: false
};

exports['default'] = {
	ClientPath: ClientPath, ImagePath: ImagePath, MainFile: MainFile, Database: Database, Session: Session, Server: Server
};
module.exports = exports['default'];