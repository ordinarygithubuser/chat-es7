import { Store } from 'ive-f';
import { Logout } from '../actions/user';
import { Send, Get } from '../actions/message';

let visible = (function(){
	let stateKey, eventKey, keys = {
		hidden: "visibilitychange",
		webkitHidden: "webkitvisibilitychange",
		mozHidden: "mozvisibilitychange",
		msHidden: "msvisibilitychange"
	};

	for (stateKey in keys) {
		if (stateKey in document) {
			eventKey = keys[stateKey];
			break;
		}
	}

	return function (c) {
		if (c) document.addEventListener(eventKey, c);
		return !document[stateKey];
	}
})();

class MessageStore extends Store {
	constructor (messages = [], inbox = 0) {
		super({ messages, inbox });

		this.listenTo(Get, this.setMessages);
		this.listenTo(Send, this.onMessage);
		this.listenTo(Logout, this.clear);
		visible(() => this.toggleVisible());
	}

	setMessages (messages) {
		this.state.messages = messages.concat(this.state.messages);
		this.notify();
	}

	onMessage (message) {
		if (!visible()) this.state.inbox += 1;
		else this.state.inbox = 0;
		this.state.messages.push(message);
		this.notify();
	}

	clear () {
		this.state.messages = [];
		this.notify();
	}

	toggleVisible () {
		if (visible()) {
			this.state.inbox = 0;
			this.notify();
		} else {

		}
	}
}

export default new MessageStore();