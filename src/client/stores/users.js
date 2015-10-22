import { Store } from 'ive-f';
import { UpdateAll } from '../actions/user';

class UsersStore extends Store {
	constructor (users = []) {
		super({ users });

		this.listenTo(UpdateAll, this.updateUsers);
	}

	updateUsers (users) {
		this.state.users = users;
		this.notify ();
	}
}

export default new UsersStore();