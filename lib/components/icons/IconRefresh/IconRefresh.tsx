import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconRefreshSvg } from './IconRefreshSvg';

export type IconRefreshProps = UseIconProps;

export const IconRefresh = (props: IconRefreshProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconRefreshSvg} {...iconProps} />;
};
