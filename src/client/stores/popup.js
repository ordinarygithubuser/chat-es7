import { Store } from 'ive-f';
import { Show, Hide } from '../actions/popup';

class PopupStore extends Store {
	constructor (popup = null) {
		super({ popup });

		this.listenTo(Show, this.show);
		this.listenTo(Hide, this.hide);
	}

	show (popup = null) {
		this.state.popup = popup;
		this.notify();
	}

	hide () {
		this.show();
	}
}

export default new PopupStore();