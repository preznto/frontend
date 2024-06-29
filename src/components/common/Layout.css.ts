import vars from '@/theme/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const layout = style({
  maxWidth: vars.layout.maxWidth,
  paddingBottom: 30,
  marginRight: 'auto',
  marginLeft: 'auto',
  height: '100%',
});
