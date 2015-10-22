import { React, Component } from 'ive-f';
import Users from './users';
import { Logout } from '../actions/user';

export default class Side extends Component {
	constructor () {
		super();
		this.own('logout');
	}

	logout () {
		Logout.trigger();
	}

	render () {
		let { user, users } = this.props;

		return <div className="side">
			<div className="account-control">
				<div className="welcome">{user.name}</div>
				<i title="Logout" className="fa fa-sign-out button" onClick={this.logout} />
			</div>
			<Users users={users}/>
		</div>;
	}
}