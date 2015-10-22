import { Route } from 'ive-b';

export default class UserRoute extends Route {
	constructor (db) {
		super(db);
	}

	@Route.isRoute()
	async login (res, data = { name: '', pass: '' }) {
		let user = await this.queryOne('loginUser', [ data.name, data.pass ]);

		if (!user) throw new Error('Invalid credentials.');
		this.getSession().setUser(user);
		res.reply('login', user);
		res.broadcast('updateAll', await this.getAll());
	}

	@Route.isRoute()
	async register (res, data = {}) {
		let user = await this.createUser(data.name, data.pass1, data.pass2);

		this.getSession().setUser(user);
		res.reply('register', user);
		res.broadcast('updateAll', await this.getAll());
	}

	@Route.isRoute()
	async setStatus (res, data) {
		let user = this.getSession().getUser();
		let { text, online } = data;

		if (user) {
			res.reply('setStatus', await this.queryOne('setUserStatus', [ user.id, text, online ]));
			res.broadcast('updateAll', await this.getAll());
		}
	}

	@Route.isRoute()
	async disconnect (res, reason) {
		await this.setOffline(res);
	}

	@Route.isRoute()
	async logout (res) {
		await this.setOffline(res);
	}

	async existsUser (name) {
		return (await this.queryAffected('existsUser', [ name ])) > 0;
	}

	async createUser (name, pass1, pass2) {
		if (name.length < 3) 	    		  throw new Error('The name must be at least 4 characters long.');
		else if (pass1.length < 3)  		  throw new Error('The password must be at least 4 characters long.');
		else if (pass1 !== pass2)   		  throw new Error('The passwords do not match.');
		else if (await this.existsUser(name)) throw new Error('Username already exists.');

		return await this.queryOne('createUser', [ name, pass1 ]);
	}

	async setOffline (res) {
		let user = this.getSession().getUser();

		if (user) {
			res.reply('logout', (await this.queryAffected('logoutUser', [ user.id ])) == 1);
			res.broadcast('updateAll', await this.getAll());
			this.getSession().setUser(null);
		}
	}

	async getAll () {
		return await this.queryAll('getAll');
	}
}