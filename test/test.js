import test from 'ava';
import age from '../';

// years since Aug 26, 2015 (when this was made)
const fix = age(1440629663548);

test('should accept Dates', (t) => {
  const now = new Date();
  const lastYear = new Date(String(now.getFullYear() - 1));
  t.is(age(now), 0);
  t.is(age(lastYear), 1);
});

test('should accept dateStrings', (t) => {
  t.is(age('Aug 3 2012'), 3 + fix);
});

test('should accept timestamps', (t) => {
  t.is(age(1343977200000), 3 + fix); // same as aug 3 2012
});
