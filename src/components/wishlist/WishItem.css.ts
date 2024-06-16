import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  columnGap: 20,
  alignItems: 'center',
});

export const contentsWrapper = style({
  padding: '5px 0',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
  flexGrow: 1,
});

export const name = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: ' -webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});
export const progressBarWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 4,
});

export const spaceBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: 12,
});
