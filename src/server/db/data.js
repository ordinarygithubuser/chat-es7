export default class Data {
	constructor (db) {
		this.db = db;
	}

	async install (prod) {
		await this.db.execute('DELETE FROM user WHERE name="test" AND pass="test";');
		await this.db.execute('DELETE FROM user WHERE name="admin" AND pass="root";');

		await this.db.call('createUser', [ 'alex', 'salival2' ]);
		await this.db.call('createUser', [ 'shadoka', 'derpster' ]);

		if (!prod) {
			await this.db.call('createUser', [ 'test', 'test' ]);
			await this.db.call('createUser', [ 'admin', 'root' ]);
			await this.db.call('createMessage', [ 1, 'test msg']);
			await this.db.call('createMessage', [ 2, 'test reply' ]);
			await this.db.call('createMessage', [ 1, 'well, well...' ]);
			await this.db.call('createMessage', [ 1, 'lorem ipsum text' ]);
			await this.db.call('createMessage', [ 2, 'msg number 5' ]);
			await this.db.call('createMessage', [ 2, 'connection test' ]);
			await this.db.call('createMessage', [ 2, 'fill messages' ]);
			await this.db.call('createMessage', [ 1, 'function test() { return args; }' ]);
			await this.db.call('createMessage', [ 2, 'export default async safe data => data.msg;' ]);
			await this.db.call('createMessage', [ 1, '10th message' ]);
			await this.db.call('createMessage', [ 2, 'history request' ]);
			await this.db.call('createMessage', [ 1, 'last' ]);
			await this.db.call('createMessage', [ 2, 'but not least' ]);
		}
	}

	async clean () {

	}
}