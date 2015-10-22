import fs from 'fs';
import mime from 'mime';

export default class ImageWriter {
	constructor (path = __dirname, size = 10) {
		this.path = path;
		this.size = size;
		this.alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_=()&$!';
	}

	async getRandomPath (type) {
		let alph = this.alph;
		let name = '';

		for (let i = 0; i < this.size; i++) {
			name += alph[Math.round(Math.random() * alph.length)];
		}
		name += `.${type}`;
		return await this.exists(name) ? await this.getRandomPath(type) : name;
	}

	async exists (name) {
		return new Promise((resolve, reject) => {
			fs.exists(this.path + name, (err, exists) => {
				return err ? reject(err) : resolve(exists);
			});
		});
	}

	async write (data, encoding) {
		let type = mime.extension(encoding);
		let name = await this.getRandomPath(type);

		return new Promise((resolve, reject) => {
			fs.writeFile(this.path + name, data, { encoding: 'binary' }, err => {
				return err ? reject(err) : resolve(name);
			});
		});
	}
}