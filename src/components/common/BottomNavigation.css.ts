import { vars } from '@/theme/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  maxWidth: vars.layout.maxWidth,
  width: '100%',
  bottom: 0,
  left: 'auto',
  right: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '12px 0 8px',
  height: vars.layout.bottomNavigationHeight,
  borderTop: '1px solid ' + vars.color.black08,
  zIndex: vars.layout.zIndexNavigation,
});
