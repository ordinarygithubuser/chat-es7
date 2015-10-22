import { React, Component } from 'ive-f';

export default class User extends Component {
	render () {
		let { user } = this.props;
		let oColor = '';

		switch (user.online) {
			case 0: oColor = 'offline'; break;
			case 1: oColor = 'online'; break;
			case 2: oColor = 'away'; break;
			case 3: oColor = 'unknown'; break;
		}

		return <div className="user">
			<div className="info">
				<i className={'fa fa-user ' + oColor} />
				<div className="name">{user.name}</div>
			</div>
			<div className="status">{user.status}</div>
		</div>;
	}
}