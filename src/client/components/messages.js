import { React, Component } from 'ive-f';
import Message from './message';

export default class Messages extends Component {
	constructor() {
		super();
	}

	componentDidMount () {
		this.refs.messages.getDOMNode().focus();
	}

	componentWillUpdate () {
		let node = this.refs.messages.getDOMNode();
		this.shouldScrollBottom = node.scrollTop + node.clientHeight === node.scrollHeight;
	}

	componentDidUpdate (prevProps) {
		let curLen = this.props.messages.length;
		let preLen = prevProps.messages.length;
		let node = this.refs.messages.getDOMNode();

		if (this.shouldScrollBottom) {
			node.scrollTop = node.scrollHeight
		} else if (curLen - preLen > 1) {
			node.scrollTop = 0;
		}
	}

	renderMessages () {
		let { user, messages } = this.props;
		return messages.map((message, i) => {
			let isOwn = user.id == message.user_id;
			return <Message key={i} message={message} isOwn={isOwn} />;
		});
	}

	render () {
		return <div className="messages" ref="messages">
			{this.renderMessages()}
		</div>;
	}
}