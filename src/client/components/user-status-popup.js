import { React, Component } from 'ive-f';
import { SetStatus } from '../actions/user';
import { Hide } from '../actions/popup';

import Dropdown from './dropdown';

let categories = [
	{ id: 1, icon: 'user online', text: 'online' },
	{ id: 2, icon: 'user away', text: 'away (as if..)' },
	{ id: 3, icon: 'user unknown', text: 'unknown (probably drunk)' }
];

function getCategory (id) {
	let res = categories[0];
	categories.map(c => { if (c.id == id)  res = c; });
	return res;
}

export default class UserStatusPopup extends Component {
	constructor (props) {
		super(props);
		let { user } = props;

		this.own('setText', 'setStatus', 'close', 'setOnline');
		this.state = {
			online: getCategory(user.online),
			text: user.status
		};
	}

	setText (e) {
		this.setState({ text: e.target.value });
	}

	setStatus () {
		let { text, online } = this.state;
		SetStatus.trigger({ text, online: online.id });
		this.close();
	}

	close () {
		Hide.trigger();
	}

	setOnline (online) {
		this.setState({ online });
	}

	render () {
		let { text, online } = this.state;
		let style = {
			left: 15, top: 120
		};

		return <div className="user-edit">
			<div className="panel">
				<h2>Change status</h2>
				<label>Category</label>
				<Dropdown style={style} options={categories} selected={online} handler={this.setOnline} />
				<label>Text</label>
				<textarea value={text} onChange={this.setText} />
			</div>
			<div className="button-bar">
				<button className="primary" onClick={this.setStatus}>Save</button>
				<button onClick={this.close}>Cancel</button>
			</div>
		</div>;
	}
}