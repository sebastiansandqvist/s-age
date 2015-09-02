// ----- dependencies
// ---------------------------------------
var expect = require('chai').expect;
var age = require('../index.js');

// years since Aug 26, 2015 (when this was made)
var fix = age(1440629663548);

// ----- tests
// ---------------------------------------
describe('age calculator', function() {

	it('should throw if no date, num, or string', function() {
		expect(function() { age(undefined); }).to.throw();
	});

	it('should accept Dates', function() {
		var now = new Date();
		var lastYear = new Date('' + (now.getFullYear() - 1))
		expect(age(now)).to.equal(0);
		expect(age(lastYear)).to.equal(1);
	});

	it('should accept dateStrings', function() {
		expect(age('Aug 3 2012')).to.equal(3 + fix)
	});

	it('should accept timestamps', function() {
		expect(age(1356728100000)).to.equal(2 + fix);
	});

});