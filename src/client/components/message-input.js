import { React, Component } from 'ive-f';
import { Send } from '../actions/message';

export default class MessageInput extends Component {
	constructor (props) {
		super(props);
		this.own('setText');
		this.state = {
			text: 'test'
		};
	}

	setText (e) {
		let text = this.state.text;

		if(e.which == 13 && !e.ctrlKey) {
			e.preventDefault();
			Send.trigger({ text: this.state.text });
			this.setState({ text: '' });
		} else if (e.which == 13 && e.ctrlKey) {
			this.setState({ text: text + '\n' });
		} else if (e.target.value != text) {
			this.setState({ text: e.target.value });
		}
	}

	render () {
		let { text } = this.state;

		return <div className="message-input">
			<textarea ref="textarea" value={text} onKeyDown={this.setText} onChange={this.setText} />
		</div>;
	}
}