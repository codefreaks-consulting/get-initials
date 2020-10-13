import test from 'ava';

import { generate } from './getInitials';

test('Generate initials', (t) => {
  t.is(generate('Jon Doe'), 'JD');
  t.is(generate('Jon', 'Doe'), 'JD');
  t.is(generate('Jon'), 'J');
  t.is(generate('', ''), null);
  t.is(generate(' ', ' '), null);
  t.is(generate('   '), null);
  t.is(generate(null, 'Doe'), 'D');
});
