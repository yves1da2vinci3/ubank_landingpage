import { colorsTuple, createTheme } from '@mantine/core';

const DEFAULT_COLORS = {
  ligthBlueColor: '#3072f2',
  whiteColor: '#f8f8f8',
  blackColor: '#3e3e3e',
  yellowColor: '#ffd500',
  darkestBlue: '#041639',
  lightDarkBlue: '#051c49',
  swiftBlueColor: '#1014aba',
  black: '#000000',
};

export const theme = createTheme({
  primaryColor: 'ligthBlue',
  fontFamily: 'Inter, sans-serif',
  colors: {
    ligthBlue: colorsTuple(DEFAULT_COLORS.ligthBlueColor),
    white: colorsTuple(DEFAULT_COLORS.whiteColor),
    black: colorsTuple(DEFAULT_COLORS.blackColor),
    darkestBlue: colorsTuple(DEFAULT_COLORS.darkestBlue),
  },
});
