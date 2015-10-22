import { React, Component } from 'ive-f';
import IconInput from './icon-input';
import * as User from '../actions/user';

let NAME = '';
let PASS1 = '';
let PASS2 = '';

export default class Register extends Component {
	constructor (props) {
		super(props);
		this.own('register', 'keyRegister', 'setName', 'setPass1', 'setPass2');

		if (!props.prod) {
			NAME = 'alex';
			PASS1 = PASS2 = 'test';
		}

		this.state = {
			name: NAME,
			pass1: PASS1,
			pass2: PASS2
		};
	}

	register () {
		let { name, pass1, pass2 } = this.state;
		User.Register.trigger({ name, pass1, pass2 });
	}

	keyRegister (key) {
		if (key == 13) this.register();
	}

	setName (name) {
		name = name.trim();
		this.setState({ name });
	}

	setPass1 (pass1) {
		pass1 = pass1.trim();
		this.setState({ pass1 });
	}

	setPass2 (pass2) {
		pass2 = pass2.trim();
		this.setState({ pass2 });
	}

	render () {
		let { name, pass1, pass2 } = this.state;

		return <div className="register">
			<h2>Register</h2>
			<IconInput change={this.setName} value={name} icon="user" focus="true" keyDown={this.keyRegister} />
			<IconInput change={this.setPass1} value={pass1} icon="key" type="password" keyDown={this.keyRegister} />
			<IconInput change={this.setPass2} value={pass2} icon="key" type="password" keyDown={this.keyRegister} />
			<button className="primary" onClick={this.register}>Send</button>
			<button onClick={this.props.showLogin}>Login</button>
		</div>;
	}
}