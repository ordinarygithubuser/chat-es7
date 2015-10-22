import { React, Component } from 'ive-f';

class Option extends Component {
	constructor (props) {
		super(props);
		this.own('select');
	}

	select () {
		let { handler, option } = this.props;
		handler(option);
	}

	render () {
		let { option } = this.props;

		return <div className="option" onClick={this.select}>
			<i className={`fa fa-${option.icon}`} />
			<span>{option.text}</span>
		</div>
	}
}

export default class Dropdown extends Component {
	constructor (props) {
		super(props);
		this.own('select', 'toggleVisible');
		this.state = {
			visible: false,
			width: 0
		};
	}

	componentDidMount () {
		let width = React.findDOMNode(this).getBoundingClientRect().width;
		this.setState({ width });
	}

	select (option) {
		this.props.handler(option);
		this.toggleVisible();
	}

	toggleVisible () {
		this.setState({ visible: !this.state.visible });
	}

	renderOptions () {
		if (!this.state.visible) return;
		let style = this.props.style || {};
		style.width = this.state.width;

		let options = this.props.options.map(option => {
			return <Option option={option} handler={this.select} />;
		});

		return <div className="options" style={style}>
			{options}
		</div>;
	}

	render () {
		let { selected } = this.props;

		return <div className="dropdown">
			<div className="inner" onClick={this.toggleVisible}>
				<div className="selected">
					<i className={`fa fa-${selected.icon}`} />
					<span>{selected.text}</span>
				</div>
				<i className="fa fa-arrow-circle-down" />
			</div>
			{this.renderOptions()}
		</div>;
	}
}