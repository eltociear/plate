/** @jsx jsx */

import { jsx } from '@udecode/slate-plugins-test-utils';
import { onKeyDownSoftBreak } from '../../onKeyDownSoftBreak';

const input = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

const event = new KeyboardEvent('keydown');

const output = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

it('should be', () => {
  onKeyDownSoftBreak()(input)(event);
  expect(input.children).toEqual(output.children);
});
