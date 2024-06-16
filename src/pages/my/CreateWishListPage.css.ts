import { style } from '@vanilla-extract/css';

export const page = style({
  padding: '12px 20px',
});

export const title = style({
  marginBottom: 40,
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 32,
});

export const accountField = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
});

export const button = style({
  position: 'fixed',
  bottom: 30,
  width: 'calc(100% - 40px)',
});
