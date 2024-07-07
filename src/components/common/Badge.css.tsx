import { createVar, style } from '@vanilla-extract/css';

export const bgColor = createVar('badge-bg-color');
export const badge = style({
  borderRadius: 4,
  padding: '0 4px',
  backgroundColor: bgColor,
  height: 16,
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
});
