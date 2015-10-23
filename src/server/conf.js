let ClientPath = __dirname.replace('server', 'client');
let ImagePath = ClientPath + '\\img\\';
let MainFile = ClientPath + '\\index.html';

let Database = {
	host: 'localhost',
	port: 3306,
	user: 'chat-admin',
	database: 'chat',
	password: '1234'
};

let Session = {
	user: null
};

let Server = {
	port: 3000,
	clean: true,
	prod: false
};

export default {
	ClientPath, ImagePath, MainFile, Database, Session, Server
};