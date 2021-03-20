import * as React from 'react';
import { Editor } from 'slate';
import { DefaultElement, RenderElementProps } from 'slate-react';
import { EditableProps } from 'slate-react/dist/components/editable';
import { SlatePlugin } from '../types/SlatePlugin/SlatePlugin';
import { flatMapKey } from './flatMapKey';

/**
 * @see {@link RenderElement}
 */
export const renderElementPlugins = (
  editor: Editor,
  plugins: SlatePlugin[]
): EditableProps['renderElement'] => (elementProps: RenderElementProps) => {
  let element;

  flatMapKey(plugins, 'renderElement').some((renderElement) => {
    element = renderElement(editor)(elementProps);
    return !!element;
  });
  if (element) return element;

  return <DefaultElement {...elementProps} />;
};
