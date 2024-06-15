import * as stylex from '@stylexjs/stylex';

export const colorMap = {
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
  secondary100: '#0075FF',
  secondary200: '#EBF4FF',
} as const
export const colors = stylex.defineVars(colorMap);

export type Color = keyof typeof colors.__tokens;
