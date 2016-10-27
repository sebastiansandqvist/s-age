# s-age

[![NPM version](https://img.shields.io/npm/v/s-age.svg)](https://www.npmjs.com/package/s-age) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-age.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-age.svg)](https://travis-ci.org/sebastiansandqvist/s-age) [![Test Coverage](https://codeclimate.com/github/sebastiansandqvist/s-age/badges/coverage.svg)](https://codeclimate.com/github/sebastiansandqvist/s-age/coverage) [![NPM license](https://img.shields.io/npm/l/s-age.svg)](https://www.npmjs.com/package/s-age)

## Usage
`s-age` is a function that calculates years since a date. Input can be a date string, timestamp, or `Date` object.

```javascript
var age = require('s-age');

age('2012'); // returns 3 (in 2015)
age(new Date()); // returns 0
age(1356728100000); // returns 2 (in 2015)
```
