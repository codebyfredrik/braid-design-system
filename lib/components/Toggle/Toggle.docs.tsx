import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Toggle } from '../';
import { Text } from '../Text/Text';
import { Strong } from '../Strong/Strong';
import source from '../../utils/source.macro';
import { Stack } from '../Stack/Stack';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: ({ id, getState, toggleState }) =>
    source(
      <Toggle
        label="Label"
        id={id}
        on={getState('toggle')}
        onChange={() => toggleState('toggle')}
      />,
    ),
  alternatives: [
    {
      name: 'Checkbox',
      description: 'For selections part of a form submission.',
    },
  ],
  additional: [
    {
      label: 'Alignment',
      description: (
        <Text>
          Toggles can be aligned via the <Strong>align</Strong> prop.
        </Text>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <Stack space="large" dividers>
            <Toggle
              label="Left"
              id={`${id}_1`}
              on={getState('toggle1')}
              onChange={() => toggleState('toggle1')}
              align="left"
            />
            <Toggle
              label="Justify"
              id={`${id}_2`}
              on={getState('toggle2')}
              onChange={() => toggleState('toggle2')}
              align="justify"
            />
            <Toggle
              label="Right"
              id={`${id}_3`}
              on={getState('toggle3')}
              onChange={() => toggleState('toggle3')}
              align="right"
            />
          </Stack>,
        ),
    },
  ],
};

export default docs;
