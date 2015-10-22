import { Table, Types } from 'ive-b';

export default class MessageTable {
	constructor (db) {
		this.db = db;

		this.table = new Table('message',
			{ name: 'user_id', 	type: new Types.Integer(11), ref: 'user' },
			{ name: 'file', 	type: new Types.Varchar(300) },
			{ name: 'text', 	type: new Types.Varchar(5000) },
			{ name: 'created', 	type: new Types.Date('CURRENT_TIMESTAMP')
		});
	}

	async install () {
		await this.db.execute(this.table.toSQL());

		await this.db.execute(`DROP PROCEDURE IF EXISTS createMessage;`);
		await this.db.execute(`DROP PROCEDURE IF EXISTS getMessageInterval;`);
		await this.db.execute(`DROP PROCEDURE IF EXISTS createImageMessage;`);
		await this.db.execute(`DROP PROCEDURE IF EXISTS getImage;`);

		await this.createMessage();
		await this.getMessageInterval();
		await this.createImage();
	}

	async clean () {
		await this.db.execute(`DROP TABLE IF EXISTS message;`);
	}

	createMessage () {
		return this.db.execute(`CREATE PROCEDURE createMessage (IN id INT, IN userText VARCHAR(2000))
		BEGIN
			INSERT INTO message (user_id, text) VALUES (id, userText);

			SELECT m.id, m.text, m.created, m.file, u.id as user_id, u.name as owner
			FROM message m JOIN user u ON m.user_id = u.id
			WHERE m.id=LAST_INSERT_ID();
		END`);
	}

	getMessageInterval () {
		return this.db.execute(`CREATE PROCEDURE getMessageInterval (IN messageId INT)
		BEGIN
			DECLARE safeId INT;

			IF messageId < 1 THEN SET safeId = (SELECT MAX(id) AS id FROM message);
			else SET safeId = 0;
			END IF;

			SELECT * FROM
				(SELECT m.id, m.text, m.created, m.file, u.id as user_id, u.name as owner
				 FROM message m JOIN user u ON m.user_id = u.id
				 WHERE m.id < messageId ORDER BY id DESC LIMIT 10) sub
			ORDER BY id ASC;
		END`);
	}

	createImage () {
		return this.db.execute(`CREATE PROCEDURE createImageMessage (IN userId INT, IN name VARCHAR(300))
		BEGIN
			INSERT INTO message (user_id, text, file) VALUES (userId, "", name);

			SELECT m.id, m.text, m.created, m.file, u.id as user_id, u.name as owner
			FROM message m JOIN user u ON m.user_id = u.id
			WHERE m.id=LAST_INSERT_ID();
		END`);
	}

}
