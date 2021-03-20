/** @jsx jsx */
import { act, renderHook } from '@testing-library/react-hooks';
import { jsx } from '@udecode/slate-plugins-test-utils';
import { Editor, Transforms } from 'slate';
import { createEditorPlugins } from '../../../../../../__fixtures__/editor.fixtures';
import { useMentionPlugin } from '../../../../useMentionPlugin';
import { mentionables } from '../mentionables.fixture';

const input = ((
  <editor>
    <hp>
      t1 @t2
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

it('should go down', () => {
  const editor = createEditorPlugins({
    editor: input,
  });

  const { result } = renderHook(() => useMentionPlugin({ mentionables }));

  act(() => {
    result.current.onChange?.(editor)([]);
  });

  act(() => {
    result.current.onKeyDown?.(editor)(
      new KeyboardEvent('keydown', { key: 'ArrowUp' })
    );
  });

  expect(result.current.getMentionSelectProps().valueIndex).toBe(2);
});
