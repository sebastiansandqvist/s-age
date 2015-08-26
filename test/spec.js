// ----- dependencies
// ---------------------------------------
require('blanket')({
    pattern: function (filename) {
        return !/node_modules/.test(filename);
    }
});

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

	it('should accept Dates')
	
	it('should accept dateStrings')

	it('should accept timestamps', function() {
		expect(age(1356728100000)).to.equal(2 + fix);
	});

});