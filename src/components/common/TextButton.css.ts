import { vars } from '@/theme/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const pressedButtonStyle = (color: string) => ({
  selectors: {
    '&:hover:not(:disabled)': {
      color: color,
      stroke: color,
    },
    '&:active:not(:disabled)': {
      color: color,
      stroke: color,
    },
    '&:focus:not(:disabled)': {
      color: color,
      stroke: color,
    },
  },
});

export const textButton = recipe({
  base: [
    {
      backgroundColor: 'transparent',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      stroke: vars.color.black100,

      ':disabled': {
        color: vars.color.black40,
        stroke: vars.color.black40,
      },
    },
    pressedButtonStyle(vars.color.black64),
  ],
  variants: {
    size: {
      medium: {},
      small: {},
    },
  },
});

export const buttonIcon = style({
  marginRight: 2,
  width: 16,
  height: 16,
});

export const linkIcon = style({
  marginLeft: 2,
  width: 16,
  height: 16,
  transform: 'rotate(180deg)',
});
