// Calculate years since date (ie. age)
// - @see http://stackoverflow.com/a/7091965/4459340
// - @param date {String|Number|Date}
// - @return {Number} years since date
module.exports = function(date) {
  var type = Object.prototype.toString.call(date);
  var now = new Date();

  // convert dateStrings and timestamps to a Date
  if (type === '[object String]' || type === '[object Number]') {
    date = new Date(date);
  }

  var yearDiff = now.getFullYear() - date.getFullYear();
  var monthDiff = now.getMonth() - date.getMonth();
  var pastDate = now.getDate() < date.getDate();

  // compare months. if same month, compare days
  if (monthDiff < 0 || (monthDiff === 0 && pastDate)) {
    yearDiff--;
  }

  return yearDiff;
};
