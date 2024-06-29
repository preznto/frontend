import { vars } from '@/theme/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

const pressedButtonStyle = (color: string) => ({
  selectors: {
    '&:hover:not(:disabled)': {
      color: color,
    },
    '&:active:not(:disabled)': {
      color: color,
    },
    '&:focus:not(:disabled)': {
      color: color,
    },
  },
});

export const buttonStyle = recipe({
  base: [
    {
      borderWidth: 0,
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: vars.color.white100,
      width: '100%',
      marginBottom: 24,

      ':disabled': {
        backgroundColor: vars.color.black08,
        color: vars.color.black40,
      },
    },
    pressedButtonStyle(vars.color.white64),
  ],
  variants: {
    type: {
      primary: {
        backgroundColor: vars.color.black100,
      },
      secondary: {
        backgroundColor: vars.color.secondary100,
      },
      gray: [
        {
          backgroundColor: vars.color.black12,
          color: vars.color.black100,
        },
        pressedButtonStyle(vars.color.black64),
      ],
    },
    size: {
      large: [
        {
          height: 56,
          padding: '16px 20px',
          width: '100%',
        },
      ],
      medium: [
        {
          height: 40,
          width: 'fit-content',
          padding: '9px 16px',
        },
      ],
      small: [
        {
          height: 32,
          width: 'fit-content',
          padding: '5px 12px',
        },
      ],
    },
  },
});

export const spinner = recipe({
  // TODO: 로딩시에 button width 확인 필요
  variants: {
    size: {
      large: [
        {
          height: 32,
          width: 32,
        },
      ],
      medium: [
        {
          width: 24,
          height: 24,
        },
      ],
      small: [
        {
          width: 24,
          height: 24,
        },
      ],
    },
  },
});
