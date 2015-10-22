import { Store } from 'ive-f';

class ErrorStore extends Store {
	constructor (domains = []) {
		super({ domains });
	}

	add (domain, error) {
		console.log('Error:', domain, error);
		if (!this.state.domains[domain]) {
			this.state.domains[domain] = [];
		}
		this.state.domains[domain].push(error);
		this.notify();
	}

	clear (domain) {
		this.state.domains[domain] = [];
		this.notify();
	}
}

export default new ErrorStore();