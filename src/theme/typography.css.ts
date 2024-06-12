import { styleVariants } from '@vanilla-extract/css';

export const typography = styleVariants({
  heading1: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  heading3: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  body1: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 26,
  },
  body2: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
  },
  body3: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 22,
  },
  body4: {
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 18,
  },
  body5: {
    fontSize: 10,
    fontWeight: 'normal',
    lineHeight: 11,
  },
});
