import _jsx from '@babel/runtime/helpers/jsx';
import React, { useMemo } from 'react';
import ActionsContext from './ActionsContext';
import { Inline } from '../Inline/Inline';
export var Actions = function Actions(_ref) {
  const size = _ref.size,
    data = _ref.data,
    children = _ref.children;
  const contextValue = useMemo(
    function () {
      return {
        size,
      };
    },
    [size],
  );
  return /* #__PURE__*/ _jsx(
    ActionsContext.Provider,
    {
      value: contextValue,
    },
    void 0,
    /* #__PURE__*/ _jsx(
      Inline,
      {
        collapseBelow: 'tablet',
        space: 'xsmall',
        data,
      },
      void 0,
      children,
    ),
  );
};
Actions.displayName = 'Actions';
