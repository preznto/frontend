import * as stylex from '@stylexjs/stylex';

export const typography = stylex.create({
  heading1: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: '36px',
  },
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: '32px',
  },
  heading3: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: '30px',
  },
  body1: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: '26px',
  },
  body2: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: '24px',
  },
  body3: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: '22px',
  },
  body4: {
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '18px',
  },
  body5: {
    fontSize: 10,
    fontWeight: 'normal',
    lineHeight: '11px',
  },
});

export type Typography = keyof typeof typography;
