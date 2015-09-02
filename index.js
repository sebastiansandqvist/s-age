'use strict';

// ----- Calculate age given date
//		-- @see http://stackoverflow.com/a/7091965/4459340
//		-- @param date {String|Number|Date}
//		-- @return {Number} years since date
// ---------------------------------------
module.exports = function(date) {

	const type = Object.prototype.toString.call(date);
	const now = new Date();

	// convert dateStrings and timestamps to a Date
	if (type === '[object String]' || type === '[object Number]') {
		date = new Date(date);
	}

	let yearDiff = now.getFullYear() - date.getFullYear();
	const monthDiff = now.getMonth() - date.getMonth();
	const pastDate = now.getDate() < date.getDate();
	
	// compare months. if same month, compare days
	if (monthDiff < 0 || (monthDiff === 0 && pastDate)) {
		yearDiff--;
	}

	return yearDiff;

};