import { React, Component } from 'ive-f';
import { Get, Image } from '../actions/message';
import { Show } from '../actions/popup';
import UserStatusPopup from './user-status-popup';

export default class Controls extends Component {
	constructor (props) {
		super(props);
		this.own('getMessages', 'changeStatus', 'sendImage');
	}

	getMessages () {
		let first = this.props.messages[0];
		let id = first ? first.id : null;
		Get.trigger({ id });
	}

	changeStatus () {
		Show.trigger(<UserStatusPopup user={this.props.user} />);
	}

	sendImage (e) {
		let file = e.target.files[0];
		let reader = new FileReader();

		reader.onload = event => {
			let type = file.type;
			let raw = event.target.result;
			Image.trigger({ raw, type });
		};
		reader.readAsBinaryString(file);
	}

	//<i className="fa fa-picture-o button image" onClick={this.sendImage} />

	render () {
		return <div className="controls">
			<div className="section">
				<i title="Load previous messages" className="fa fa-reply button" onClick={this.getMessages} />
				<i className="fa fa-edit button" onClick={this.changeStatus} />
				<div className="upload" title="Send image">
					<input className="file" type="file" onChange={this.sendImage} />
				</div>
			</div>
		</div>;
	}
}