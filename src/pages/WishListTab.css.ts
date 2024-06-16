import { vars } from '@/theme/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: 20,
  backgroundColor: vars.color.white100,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
});

export const numOfItems = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 20,
});
