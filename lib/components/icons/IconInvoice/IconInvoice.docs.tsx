import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconInvoice } from './IconInvoice';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconInvoice />,
    },
  ],
};

export default docs;