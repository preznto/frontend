import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  primary100: '#FF5C16',
  primary200: '#FFE0D3',
  black: '#111111',
  black64: '#111111A3',
  black40: '#11111166',
  black12: '#1111111F',
  white: '#FFFFFF',
  white80: '#FFFFFFCC',
  white64: '#FFFFFFA3',
  white40: '#FFFFFF66',
  white8: '#FFFFFF14',
  bluegray: '#F3F4F6',
  disable: '#DDDDDD',
} as const);

export type Color = keyof typeof colors.__tokens;
