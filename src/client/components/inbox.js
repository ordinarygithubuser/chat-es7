import { React, Component } from 'ive-f';

export default class Inbox extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let inbox = this.props.inbox;

		if (inbox > 0) {
			document.title = 'chat - (' + inbox + ')';
		} else {
			document.title = 'chat';
		}

		return <noscript />;
	}
}