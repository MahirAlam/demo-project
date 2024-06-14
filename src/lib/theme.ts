import {
  DEFAULT_THEME,
  type MantineColorsTuple,
  createTheme,
  mergeMantineTheme,
  em,
} from '@mantine/core';

import colors from './colors';

type CustomColors = keyof typeof colors;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, MantineColorsTuple>;
  }
}

const mantineColors = Object.fromEntries(
  Object.entries(colors)
    .filter(([v]) => typeof v !== 'string')
    .map(([k, v]) => [k, Object.values(v)]),
);

// Do not forget to pass theme to MantineProvider
export const themeOverride = createTheme({
  primaryColor: 'violet',
  colors: mantineColors,
  breakpoints: {
    sm: em('480px'),
    // => @media (min-width: 480px) { ... }

    md: em('768px'),
    // => @media (min-width: 768px) { ... }

    lg: em('1024px'),
    // => @media (min-width: 1024px) { ... }

    xl: em('1280px'),
    // => @media (min-width: 1280px) { ... }
  },
});

const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
export { theme, colors };
