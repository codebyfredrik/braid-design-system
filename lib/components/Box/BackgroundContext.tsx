import React, { createContext, useContext, ReactElement } from 'react';
import { BoxProps } from './Box';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { mapColorModeValue } from '../../css/atoms/sprinkles.css';
import { vars } from '../../themes/vars.css';

export type BackgroundVariant =
  | keyof typeof vars.backgroundColor
  | 'customDark'
  | 'customLight';

const lightModeBackgroundContext = createContext<BackgroundVariant>('body');
const darkModeBackgroundContext = createContext<BackgroundVariant>('bodyDark');

export const LightBackgroundProvider = lightModeBackgroundContext.Provider;
export const DarkBackgroundProvider = darkModeBackgroundContext.Provider;

export const renderBackgroundProvider = (
  background: BoxProps['background'],
  element: ReactElement | null,
) => {
  if (!background) {
    return element;
  }

  if (typeof background === 'string') {
    return (
      <LightBackgroundProvider value={background}>
        <DarkBackgroundProvider value={background}>
          {element}
        </DarkBackgroundProvider>
      </LightBackgroundProvider>
    );
  }

  let returnEl = element;

  if (background.lightMode) {
    returnEl = (
      <LightBackgroundProvider value={background.lightMode}>
        {returnEl}
      </LightBackgroundProvider>
    );
  }

  if (background.darkMode) {
    returnEl = (
      <DarkBackgroundProvider value={background.darkMode}>
        {returnEl}
      </DarkBackgroundProvider>
    );
  }

  return returnEl;
};

export const useBackground = () => ({
  lightMode: useContext(lightModeBackgroundContext),
  darkMode: useContext(darkModeBackgroundContext),
});

export const useBackgroundLightness = (
  backgroundOverride?: ReturnType<typeof useBackground>,
) => {
  const backgroundFromContext = useBackground();
  const background = backgroundOverride || backgroundFromContext;
  const { backgroundLightness } = useBraidTheme();

  return {
    lightMode: backgroundLightness[background.lightMode],
    darkMode: backgroundLightness[background.darkMode],
  };
};

export const useColorContrast = () => {
  const background = useBackground();
  const backgroundLightness = useBackgroundLightness();

  return <Value extends string>(
    map:
      | { light: Value; dark: Value }
      | ((contrast: 'light' | 'dark', background: BackgroundVariant) => Value),
  ) =>
    mapColorModeValue(backgroundLightness, (lightness, mode) =>
      typeof map === 'function'
        ? map(lightness, background[mode])
        : map[lightness],
    );
};
