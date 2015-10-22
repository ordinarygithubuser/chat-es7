import { Transaction } from 'ive-f';
import { Add } from './error';

export const Login = new Transaction('login', (error, user) => {
	if (error) Add.trigger('login', error);
	else return user;
});

export const Register = new Transaction('register', (error, user) => {
	if (error) Add.trigger('register', error);
	else return user;
});

export const Logout = new Transaction('logout', (error, success) => {
	if (error) Add.trigger('logout', error);
	else return success;
});

export const SetStatus = new Transaction('setStatus', (error, user) => {
	if (error) Add.trigger('setStatus', error);
	else return user;
});

export const UpdateAll = new Transaction('updateAll', (error, users) => {
	if (error) Add.trigger('updateAll', error);
	else return users;
});







/*

THIS IS A HILARIOUS CONCEPT FOR NOW

class OrigTrans {}

class _Transaction extends OrigTrans {
	constructor () {
		super();
	}

	login (user) {
		return user;
	}

	register (user) {
		return user;
	}

	logout (success) {
		return success;
	}

	setStatus (user) {
		return user;
	}

	updateAll (users) {
		return users;
	}

	onError (event, error) {
		Add.trigger(event, error);
	}
}
	*/