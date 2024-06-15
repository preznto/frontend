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
      color: 'white',
      width: '100%',
      marginBottom: 24,

      ':disabled': {
        backgroundColor: vars.color.black08,
        color: vars.color.black40,
      },
    },
    pressedButtonStyle(vars.color.red),
  ],
  variants: {
    type: {
      primary: {
        backgroundColor: vars.color.black100,
      },
      secondary: {
        backgroundColor: vars.themeColor.color.secondary100,
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
          height: '56px',
        },
      ],
      medium: [
        {
          width: '57px',
          height: '40px',
        },
      ],
      small: [
        {
          width: '49px',
          height: '32px',
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
          height: '32px',
          width: '32px',
        },
      ],
      medium: [
        {
          width: '24px',
          height: '24px',
        },
      ],
      small: [
        {
          width: '24px',
          height: '24px',
        },
      ],
    },
  },
});
