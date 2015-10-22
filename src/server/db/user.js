import { Table, Types } from 'ive-b';

export default class UserTable {
	constructor (db) {
		this.db = db;

		this.table = new Table('user',
			{ name: 'name',   type: new Types.Varchar(20), req: true },
			{ name: 'pass',   type: new Types.Varchar(30), req: true },
			{ name: 'status', type: new Types.Varchar(20, '"Hi, i am new!"') },
			{ name: 'online', type: new Types.Boolean('FALSE') }
		);
	}

	async install () {
		await this.db.execute(this.table.toSQL());

		await this.db.execute(`DROP PROCEDURE IF EXISTS existsUser;`);
		await this.db.execute(`DROP PROCEDURE IF EXISTS createUser;`);
		await this.db.execute(`DROP PROCEDURE IF EXISTS getUser;`);
		await this.db.execute(`DROP PROCEDURE IF EXISTS loginUser;`);
		await this.db.execute(`DROP PROCEDURE IF EXISTS logoutUser;`);
		await this.db.execute(`DROP PROCEDURE IF EXISTS setUserStatus;`);
		await this.db.execute(`DROP PROCEDURE IF EXISTS getAll;`);

		await this.createUser();
		await this.loginUser();
		await this.logoutUser();
		await this.existsUser();
		await this.setUserStatus();
		await this.getAll();
	}

	async clean () {
		await this.db.execute(`DROP TABLE IF EXISTS user;`);
	}

	existsUser () {
		return this.db.execute(`CREATE PROCEDURE existsUser(IN name VARCHAR(30))
		BEGIN
			SELECT * FROM user u WHERE u.name=name;
		END`);
	}

	createUser () {
		return this.db.execute(`CREATE PROCEDURE createUser (IN name VARCHAR(30), IN pass VARCHAR(30))
		BEGIN
			INSERT INTO user (name, pass, online, status) VALUES (name, pass, 1, "hi, i am new");
			SELECT * FROM user WHERE user.id=LAST_INSERT_ID();
		END`);
	}

	getUser () {
		return this.db.execute(`CREATE PROCEDURE getUser (IN userId INT)
		BEGIN
			SELECT * FROM user WHERE id=userId;
		END`);
	}

	loginUser () {
		return this.db.execute(`CREATE PROCEDURE loginUser (IN name VARCHAR(30), IN pass VARCHAR(30))
		BEGIN
			UPDATE user u SET online=1 WHERE u.name=name AND u.pass=pass;
			SELECT * FROM user u WHERE u.name=name AND u.pass=pass;
		END`);
	}


	logoutUser () {
		return this.db.execute(`CREATE PROCEDURE logoutUser (IN userId INT)
		BEGIN
			UPDATE user SET online=0 WHERE id=userId;
		END`);
	}

	setUserStatus () {
		return this.db.execute(`CREATE PROCEDURE setUserStatus (IN userId INT, IN status VARCHAR(140), IN online INT)
		BEGIN
			UPDATE user u SET u.status=status, u.online=online WHERE u.id=userId;
			SELECT * FROM user WHERE id=userId;
		END`);
	}

	getAll () {
		return this.db.execute(`CREATE PROCEDURE getAll ()
		BEGIN
			SELECT id, name, online, status FROM user ORDER BY online DESC, name;
		END`);
	}
}