import { Store } from 'ive-f';
import * as User from '../actions/user';
import { Get } from '../actions/message';

class UserStore extends Store {
	constructor (user = null) {
		super({ user });

		this.listenTo(User.Login, this.login);
		this.listenTo(User.Logout, this.logout);
		this.listenTo(User.Register, this.login);
		this.listenTo(User.SetStatus, this.onStatus);
	}

	login (user) {
		this.state.user = user;
		Get.trigger();
		this.notify();
	}

	logout (success) {
		if (!success) return;
		this.state.user = null;
		this.notify ();
	}

	onStatus (user) {
		this.state.user = user;
		this.notify();
	}
}

export default new UserStore();