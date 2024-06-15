import { vars } from '@/theme/globalTheme.css';
import { style, styleVariants } from '@vanilla-extract/css';

const navBase = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  top: 0,
  left: 'auto',
  right: 'auto',
  width: '100%',
  maxWidth: vars.layout.maxWidth,
  backgroundColor: vars.color.white100,
});

export const nav = styleVariants({
  hidden: [
    navBase,
    {
      height: 0,
      padding: 0,
    },
  ],
  visible: [
    navBase,
    {
      height: vars.layout.topNavigationHeight,
      padding: '8px 10px',
    },
  ],
});

export const clickable = style({
  cursor: 'pointer',
});

export const space = style({
  marginBottom: vars.layout.topNavigationHeight,
});
