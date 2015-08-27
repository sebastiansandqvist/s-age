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

## License (ISC)
Copyright (c) 2015, Sebastian Sandqvist <s.github@sparque.me>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.