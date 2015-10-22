import { React, Component } from 'ive-f';
import IconInput from './icon-input';
import * as User from '../actions/user';

let NAME = '';
let PASS = '';

export default class Login extends Component {
	constructor (props) {
		super(props);

		if (!props.prod) {
			NAME = 'test';
			PASS = 'test';
		}

		this.state = {
			name: NAME,
			pass: PASS
		};

		this.own('login', 'setName', 'setPass', 'keyLogin');
	}

	login () {
		let { name, pass } = this.state;
		User.Login.trigger({ name, pass });
	}

	setName (name) {
		name = name.trim();
		this.setState({ name });
	}

	setPass (pass) {
		pass = pass.trim();
		this.setState({ pass });
	}

	keyLogin (key) {
		if (key == 13) this.login();
	}

	render () {
		let { name, pass } = this.state;

		return <div className="login">
			<h2>Login</h2>
			<IconInput focus="true" change={this.setName} keyDown={this.keyLogin} value={name} icon="user" />
			<IconInput change={this.setPass} keyDown={this.keyLogin} value={pass} icon="key" type="password" />
			<button className="primary" onClick={this.login}>Send</button>
			<button onClick={this.props.showRegister}>Register</button>
		</div>;
	}
}