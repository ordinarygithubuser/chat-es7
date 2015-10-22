import { React, Component } from 'ive-f';

class Item extends Component {
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick () {
		let { item, hide } = this.props;
		item.handler(item.object);
		hide();
	}

	render () {
		return <div className="navi-item" onClick={this.onClick}>
			{this.props.item.object.name}
		</div>;
	}
}

export default class HoverMenu extends Component {
	constructor (props) {
		super(props);

		this.own('toggle', 'hide');
		this.state = {
			visible: false,
			position: { left: 0, top: 0, bottom: 0, right: 0 }
		};
	}

	componentDidMount () {
		this.updatePosition();
	}

	componentDidUpdate (prevProps, prevState) {
		let pos1 = this.state.position;
		let pos2 = prevState.position;

		if (pos1.left != pos2.left || pos1.top != pos2.top) {
			this.updatePosition();
		}
	}

	updatePosition () {
		if (this.refs.button) {
			let position = this.refs.button.getDOMNode().getBoundingClientRect();
			this.setState({ position });
		}
	}

	toggle () {
		if (this.props.items.length == 0 && this.props.hideOnEmpty) {
			return;
		}
		this.hide();

		setTimeout(() => {
			if (this.state.visible) {
				window.addEventListener('click', this.toggle);
			}
		}, 100);
	}

	hide () {
		window.removeEventListener('click', this.toggle);
		this.setState({ visible: !this.state.visible });
	}

	renderItems () {
		let { items, getStyle } = this.props;
		let  { visible, position } = this.state;

		if (visible) {
			let elements = items.map((item, i) => {
				return <Item key={i} hide={this.hide} item={item} />;
			});

			return <div className="popup-wrapper">
				<div className="popup" style={getStyle(position)}>
					{elements}
				</div>
			</div>;
		}
	}

	render () {
		return <div className="hover-menu">
			<i ref="button" className="fa fa-bars" onClick={this.toggle}></i>
			{this.renderItems()}
		</div>;
	}
}