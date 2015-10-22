import { Server } from 'ive-b';
import setup from './db/setup';
import conf from './conf';

import UserRoute from './routes/user';
import MessageRoute from './routes/message';

import UserTable from './db/user';
import MessageTable from './db/message';
import Data from './db/data';

let server = new Server(conf);

server.start(async () => {
	await server.setupTables(UserTable, MessageTable, Data);
	server.setRoutes(UserRoute, MessageRoute);
	console.log('Chat started.');
});