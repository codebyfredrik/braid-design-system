import { Atoms } from '../lib/atoms/atoms';
import { responsiveStyle } from '../lib/atoms/responsiveStyle';
import { breakpoints } from '../lib/atoms/breakpoints';
import { globalHeadingStyle, globalTextStyle } from '../lib/hooks/typography';
import type { Breakpoint } from '../lib/atoms/breakpoints';
declare const vars: {
  grid: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  space: import('@vanilla-extract/private').MapLeafNodes<
    {
      gutter: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
  touchableSize: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  backgroundColor: import('@vanilla-extract/private').MapLeafNodes<
    {
      readonly formAccentActive: string;
      readonly formAccentHover: string;
      readonly brandAccentActive: string;
      readonly brandAccentHover: string;
      readonly criticalActive: string;
      readonly criticalHover: string;
      readonly infoLight: string;
      readonly promoteLight: string;
      readonly criticalLight: string;
      readonly positiveLight: string;
      readonly cautionLight: string;
      readonly neutralLight: string;
      readonly body: string;
      readonly brand: string;
      readonly input: string;
      readonly inputDisabled: string;
      readonly brandAccent: string;
      readonly formAccent: string;
      readonly formAccentDisabled: string;
      readonly selection: string;
      readonly info: string;
      readonly promote: string;
      readonly card: string;
      readonly critical: string;
      readonly caution: string;
      readonly positive: string;
      readonly neutral: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
  foregroundColor: import('@vanilla-extract/private').MapLeafNodes<
    {
      link: string;
      linkHover: string;
      linkVisited: string;
      neutral: string;
      neutralInverted: string;
      formAccent: string;
      brandAccent: string;
      critical: string;
      info: string;
      promote: string;
      positive: string;
      caution: string;
      secondary: string;
      secondaryInverted: string;
      rating: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
  textWeight: import('@vanilla-extract/private').MapLeafNodes<
    {
      medium: string;
      regular: string;
      strong: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
  borderColor: import('@vanilla-extract/private').MapLeafNodes<
    {
      standard: string;
      standardInverted: string;
      field: string;
      focus: string;
      critical: string;
      info: string;
      promote: string;
      positive: string;
      caution: string;
      formHover: string;
      formAccent: string;
      brandAccent: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
  borderRadius: import('@vanilla-extract/private').MapLeafNodes<
    {
      standard: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
  borderWidth: import('@vanilla-extract/private').MapLeafNodes<
    {
      standard: string;
      large: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
};
declare function atoms(props: Omit<Atoms, 'background'>): string;
export {
  vars,
  atoms,
  breakpoints,
  responsiveStyle,
  globalTextStyle,
  globalHeadingStyle,
};
export type { Breakpoint };
