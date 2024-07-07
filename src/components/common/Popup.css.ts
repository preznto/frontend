import { vars } from '@/theme/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const dimmer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 999,
  height: '100vh',
  width: '100vw',
  backgroundColor: vars.color.black80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const popup = style({
  padding: 20,
  backgroundColor: vars.color.white100,
  borderRadius: 16,
  width: 329,
});

export const titleWrraper = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '12px 0 32px 0',
});

export const buttonWrraper = style({
  display: 'flex',
  gap: 8,
});

export const descriptionStyle = style({
  marginTop: 4,
});
