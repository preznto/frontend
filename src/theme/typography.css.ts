import { styleVariants, globalFontFace } from '@vanilla-extract/css';

export const Pretendard = 'Pretendard';

globalFontFace(Pretendard, {
  src: "url('/fonts/Pretendard-Regular.woff2') format('woff2')",
  fontStyle: 'normal',
  fontWeight: 'normal'
})

globalFontFace(Pretendard, {
  src: "url('/fonts/Pretendard-Bold.woff2') format('woff2');",
	fontStyle: 'normal',
	fontWeight: 'bold',
})

export const typography = styleVariants({
  heading28: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: '36px',
  },
  heading24: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: '32px',
  },
  heading20: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: '30px',
  },
  body18: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: '26px',
  },
  body16: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: '24px',
  },
  body14: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: '22px',
  },
  body12: {
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '18px',
  },
  body10: {
    fontSize: 10,
    fontWeight: 'normal',
    lineHeight: '11px',
  },
});

export type Typography = keyof typeof typography;