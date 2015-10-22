import { Route } from 'ive-b';
import ImageWriter from './image-writer';

export default class MessageRoute extends Route {
	constructor (db, conf) {
		super(db);
		this.writer = new ImageWriter(conf.ImagePath);
	}

	@Route.isRoute()
	async send (res, data = { text: '' }) {
		let user = this.getSession().getUser();
		let message = await this.queryOne('createMessage', [user.id, data.text]);
		res.broadcast('send', message);
	}

	@Route.isRoute()
	async getInterval (res, data = { id: 999999 }) {
		let messages = await this.queryAll('getMessageInterval', [ data.id ]);
		res.reply('getInterval', messages);
	}

	@Route.isRoute()
	async image (res, data = {}) {
		let user = this.getSession().getUser();
		let name = await this.writer.write(data.raw, data.type);
		let message = await this.queryOne('createImageMessage', [ user.id, `img/${name}` ]);
		res.reply('send', message);
	}
}