import { React, Component } from 'ive-f';
import User from './user';

export default class Users extends Component {
	constructor (props) {
		super(props);
	}

	renderUsers () {
		return this.props.users.map((user, i) => {
			return <User key={i} user={user} />;
		});
	}

	render () {
		return <div className="users">
			{this.renderUsers()}
		</div>;
	}
}