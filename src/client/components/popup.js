import { React, Component } from 'ive-f';

export default class Popup extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let Component = this.props.popup;
		if (!Component) {
			return <noscript />;
		}
		return <div className="popup-background">
			<div className="popup">{Component}</div>
		</div>;
	}
}