import React from 'react';
import { Snippets } from '../private/Snippets';
import { Toggle } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Toggle label="Label" />),
  },
  {
    name: 'Right aligned',
    code: source(<Toggle label="Label" align="right" />),
  },
  {
    name: 'Justified',
    code: source(<Toggle label="Label" align="justify" />),
  },
];
