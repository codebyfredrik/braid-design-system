import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = [
  'value',
  'type',
  'onChange',
  'onBlur',
  'onFocus',
  'onClear',
  'placeholder',
];
import React, { forwardRef, Fragment, useRef } from 'react';
import { Box } from '../Box/Box';
import { Field } from '../private/Field/Field';
import { ClearField } from '../private/Field/ClearField';
const validTypes = {
  text: 'text',
  password: 'password',
  email: 'email',
  search: 'search',
  number: 'number',
  tel: 'tel',
  url: 'url',
};
export var TextField = /* #__PURE__*/ forwardRef(function (_ref, forwardedRef) {
  const value = _ref.value,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    onClear = _ref.onClear,
    placeholder = _ref.placeholder,
    restProps = _objectWithoutProperties(_ref, _excluded);

  // We need a ref regardless so we can imperatively
  // focus the field when clicking the clear button
  const defaultRef = useRef(null);
  const inputRef = forwardedRef || defaultRef;
  const clearable = Boolean(
    typeof onClear !== 'undefined' &&
      typeof value === 'string' &&
      value.length > 0,
  );
  return /* #__PURE__*/ React.createElement(
    Field,
    _extends({}, restProps, {
      value,
      labelId: undefined,
      secondaryMessage: null,
      secondaryIcon: onClear
        ? /* #__PURE__*/ _jsx(ClearField, {
            hide: !clearable,
            onClear,
            inputRef,
          })
        : null,
    }),
    function (overlays, fieldProps, icon, secondaryIcon, prefix) {
      return /* #__PURE__*/ _jsx(
        Fragment,
        {},
        void 0,
        icon,
        prefix,
        /* #__PURE__*/ React.createElement(
          Box,
          _extends(
            {
              component: 'input',
              type: validTypes[type],
              value,
              onChange,
              onFocus,
              onBlur,
              placeholder,
            },
            fieldProps,
            {
              ref: inputRef,
            },
          ),
        ),
        overlays,
        secondaryIcon,
      );
    },
  );
});
TextField.displayName = 'TextField';
