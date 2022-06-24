export function getDate(type) {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;
	return `${year}-${month}-${day}`;
};

export const currentDate = getDate({
	format: true
});

import moment from './moment.min.js';
let nowYear = moment().format('YYYY');
let yearArray = [];
for (var i = -10; i < 11; i++) {
	yearArray.push(Number.parseInt(nowYear) + i)
}
export const dateArray = [yearArray, ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']];
export const dateIndex = [10, moment().month()];
