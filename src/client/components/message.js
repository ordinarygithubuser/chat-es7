import { React, Component } from 'ive-f';
import { parseSqlDate } from '../helper/date';

export default class Message extends Component {
	constructor (props) {
		super(props);
	}

	parseUrl (text) {
		let result = text;
		let indices = [];
		let index = 0;

		while (index < text.length) {
			let rest = text.substr(index, text.length);
			let start = rest.indexOf('http://');

			if (start === -1) start = rest.indexOf('https://');
			if (start === -1) start = rest.indexOf('www.');

			if (start === 0) {
				let end = text.indexOf(' ', index);

				if (end === -1) end = text.length;
				indices.push({ start: index, end: end });
				index = end;
			} else {
				index++;
			}
		}

		if (indices.length > 0) {
			result = [];
			index = 0;
			indices.map(c => {
				let url = text.substring(c.start, c.end);
				let pre = text.substring(index, c.start);
				let href = url;

				if (this.verifyURL(url)) { // image
					let show = () => window.open(url, '_blank');
					result.push(<img className="image-url" src={url} onClick={show}/>);
				} else if (url.indexOf('www') === 0) { // normal url
					href = `http://${url}`;
					if (pre !== '') result.push(<span>{pre}</span>);
					result.push(<a target="_blank" href={href}>{url}</a>);
				}
				index = c.end;
			});
			let last = text.substring(index, text.length);

			if (last) result.push(<span>{last}</span>);
		}
		return result;
	}

	formatText (text) {
		let style = {
			display: 'block',
			width: '100%'
		};

		return text.split('\n').map((part, i) => {
			return <div key={i} style={style}>{this.parseUrl(part)}</div>;
		});
	}

	verifyURL (url) {
		return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
	}

	render () {
		let { message, isOwn } = this.props;
		let { owner, created, text } = message;
		let ownClass = isOwn ? ' own' : '';
		let date = parseSqlDate(created);
		let inner = <noscript />;

		if (message.file) {
			inner = <img src={message.file} />
		} else {
			inner = this.formatText(text);
		}

		return <div className={`message ${ownClass}`}>
			<div className="info">
				<div className="owner">{owner}</div>
				<div className="created">
					<div className="time">{date.time}</div>
					<div className="date">{date.weekday + ', ' + date.year}</div>
				</div>
			</div>
			<div className="text">{inner}</div>
		</div>;
	}

}