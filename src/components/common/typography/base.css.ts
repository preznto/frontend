import { createVar, style } from '@vanilla-extract/css';

export const maxLines = createVar('typography-max-line');
export const lineClamp = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: ' -webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: maxLines,
});
