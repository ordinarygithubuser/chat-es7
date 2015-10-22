import { Transaction } from 'ive-f';
import { Add } from './error';

export const Send = new Transaction('send', (error, message) => {
	if (error) Add.trigger('send', error);
	else return message;
});

export const Get = new Transaction('getInterval', (error, messages) => {
	if (error) Add.trigger('getInterval', error);
	else return messages;
});

export const Image = new Transaction('image', (error, message) => {
	if (error) Add.trigger('image', error);
	else return message;
});