import _jsx from '@babel/runtime/helpers/jsx';

let _Text;

import React from 'react';
import { Strong, Text } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    Example: function Example() {
      return source(
        _Text ||
          (_Text = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'The last word of this sentence is ',
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'strong.'),
          )),
      );
    },
  },
];