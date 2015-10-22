let weekdays = {
	0: 'Sun',
	1: 'Mon',
	2: 'Tue',
	3: 'Wed',
	4: 'Thu',
	5: 'Fri',
	6: 'Sat'	
};

export function parseSqlDate (sqlTime) {
	let d = new Date(sqlTime);
	let year = pad(d.getDate()) + '.' + pad(d.getMonth() + 1) + '.' + d.getFullYear();
	let time = pad(d.getHours()) + ':' + pad(d.getMinutes());
	let weekday = weekdays[d.getDay()];
	return { year, time, weekday };
}

function pad (val) {
	let str = val + '';
	return str.length > 1 ? str : '0' + str;
}