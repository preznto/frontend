import { vars } from '@/theme/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const switchStyle = style({
  appearance: 'none',
  position: 'relative',
  border: 'none',
  width: 40,
  height: 24,
  borderRadius: 40,
  backgroundColor: vars.color.black08,
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      width: 18,
      height: 18,
      borderRadius: '50%',
      left: 3,
      top: 3,
      backgroundColor: vars.color.white100,
      transition: 'left 200ms ease-in-out',
    },
    '&:checked': {
      backgroundColor: vars.color.black100,
    },
    '&:checked::before': {
      left: 19,
      backgroundColor: vars.color.grayblue,
    },
  },
});
