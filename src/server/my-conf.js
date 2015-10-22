/**
 * Created by alex on 22.10.2015.
 */
let ClientPath = __dirname.replace('server', 'client');
let ImagePath = ClientPath + '\\img\\';
let MainFile = ClientPath + '\\index.html';

let Database = {
	host: 'localhost',
	port: 3300,
	user: 'alex',
	database: 'chat2',
	password: 'bezgog8jd'
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
