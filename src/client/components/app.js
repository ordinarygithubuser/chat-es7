import { React, StoreComponent } from 'ive-f';

import UserStore from '../stores/user';
import UsersStore from '../stores/users';
import MessageStore from '../stores/message';
import ErrorStore from '../stores/error';
import PopupStore from '../stores/popup';

import Auth from './auth';
import Side from './side';
import Controls from './controls';
import Messages from './messages';
import MessageInput from './message-input';
import Inbox from './inbox';
import Popup from './popup';

export default class App extends StoreComponent {
	constructor (props) {
		super(props);
		this.connect(UserStore);
		this.connect(UsersStore);
		this.connect(PopupStore);
		this.connect(MessageStore);
		this.connect(ErrorStore);
	}

	render () {
		let { user, users, messages, inbox, popup } = this.state;

		if (!user) return <Auth />;

		return <div className="app">
			<Inbox inbox={inbox} />
			<Side user={user} users={users} />
			<div className="main">
				<Messages user={user} messages={messages} />
				<Controls user={user} messages={messages} />
				<MessageInput />
			</div>
			<Popup popup={popup} />
		</div>;
	}
}