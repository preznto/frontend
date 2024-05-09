import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  primary100: '#FF5C16',
  primary200: '#FFE0D3',
  black: '#111111',
  white: '#FFFFFF',
  gray900: '#11111164',
  gray800: '#11111140',
  gray700: '#11111112',
  gray600: '#11111112',
  bluegray: '#F3F4F6',
} as const);

export type Color = keyof typeof colors.__tokens;
