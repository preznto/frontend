import { createVar, style } from '@vanilla-extract/css';

export const bgColor = createVar('progress-bar-bg-color');
export const progressColor = createVar('progress-bar-progress-color');
export const progressWidth = createVar('progress-bar-progress-width');
export const bar = style({
  backgroundColor: bgColor,
  height: 12,
  width: '100%',
  borderRadius: 4,
  position: 'relative',
});

export const progress = style({
  backgroundColor: progressColor,
  width: progressWidth,
  height: '100%',
  borderRadius: 4,
  position: 'absolute',
  top: 0,
  left: 0,
});
