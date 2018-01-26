# s-age

[![NPM version](https://img.shields.io/npm/v/s-age.svg)](https://www.npmjs.com/package/s-age) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-age.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-age.svg)](https://travis-ci.org/sebastiansandqvist/s-age) [![NPM license](https://img.shields.io/npm/l/s-age.svg)](https://www.npmjs.com/package/s-age)

## Usage
`s-age` is a function that calculates years since a date. Input can be a date string, timestamp, or `Date` object.

```javascript
var age = require('s-age');

age('2012'); // returns 6 (in 2018)
age('Dec 2 2012'); // returns 5 (in January 2018)
age(new Date()); // returns 0
age(1356728100000); // returns 5 (in 2018)
```
