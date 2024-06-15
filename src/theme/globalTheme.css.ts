import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

export const global = createGlobalTheme(':root', {
  color: {
    black100: '#111111',
    black80: '#111111CC',
    black64: '#111111A3',
    black40: '#11111166',
    black20: '#11111133',
    black12: '#1111111F',
    black08: '#11111114',
    black04: '#1111110A',
    white100: '#FFFFFF',
    white80: '#FFFFFFCC',
    white64: '#FFFFFFA3',
    white40: '#FFFFFF66',
    white20: '#FFFFFF33',
    white12: '#FFFFFF1F',
    white08: '#FFFFFF14',
    white04: '#FFFFFF0A',
    grayblue: '#FAFBFB',
    gray08: '#ECECEC',
    gray04: '#F5F5F5',
    red: '#FF0000',
  },
  layout: {
    maxWidth: '1280px',
    topNavigationHeight: '48px',
    bottomNavigationHeight: '60px',
    zIndexNavigation: '10',
  },
});

const themeColor = createThemeContract({
  color: {
    secondary100: '',
    secondary200: '',
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    secondary100: '#0075FF',
    secondary200: '#EBF4FF',
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    secondary100: 'orange', // Dark모드 추가시 변경
    secondary200: 'blue', // Dark모드 추가시 변경
  },
});

export const vars = {
  ...global,
  color: {
    ...global.color,
    ...themeColor.color,
  },
  // TODO: deprecated. Remove this line after migration.
  themeColor,
};

export type Color = keyof typeof vars.color;
