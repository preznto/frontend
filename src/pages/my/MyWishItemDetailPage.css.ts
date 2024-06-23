import { vars } from '@/theme/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const wishItemImageSection = style({
  position: 'relative',
});

export const wishItemImg = style({
  width: '100%',
  height: 393,
});

export const linkBtn = style({
  position: 'absolute',
  bottom: -2,
  left: 20,
});

export const wishItemInfoSection = style({
  padding: '24px 20px 20px 32px',
});

export const wishItemNameWrraper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 32,
});

export const wishItemPriceWrraper = style({
  display: 'flex',
  alignItems: 'end',
  marginBottom: 8,
});

export const fundingAmount = style({
  marginRight: 8,
});

export const fundingRate = style({
  marginLeft: 'auto',
});

export const progress = createVar();

const progressBase = style({
  height: 12,
  borderRadius: 4,
});

export const progressBarWrraper = style([
  {
    backgroundColor: vars.color.black04,
    width: '100%',
    marginBottom: 20,
  },
  progressBase,
]);

export const progressBar = style([
  {
    backgroundColor: vars.color.black100,
    width: progress,
  },
  progressBase,
]);
