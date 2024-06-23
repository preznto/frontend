import { vars } from '@/theme/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

export const badgeStyle = recipe({
  base: {
    color: vars.color.white100,
    borderRadius: 4,
    width: 'fit-content',
    padding: '2.5px 4px',
  },
  variants: {
    color: {
      black: {
        backgroundColor: vars.color.black100,
      },
      blue: {
        backgroundColor: vars.color.secondary100,
      },
      gray: {
        backgroundColor: vars.color.black40,
      },
      white: {
        backgroundColor: vars.color.white100,
        color: vars.color.black100,
      },
    },
  },
});
