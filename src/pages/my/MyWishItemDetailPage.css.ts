import { vars } from '@/theme/globalTheme.css';
import { style } from '@vanilla-extract/css';
export const wishItemImageSection = style({
  position: 'relative',
});

export const wishItemImg = style({
  width: '100%',
  height: 393,
});

export const linkBtn = style({
  position: 'absolute',
  bottom: 22,
  left: 20,
});

export const wishItemInfoSection = style({
  padding: '24px 20px 32px 20px',
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

export const fundingUserListSection = style({
  borderTop: `8px solid ${vars.color.black04}`,
  padding: '30px 20px 40px 20px',
});

export const fundingUserList = style({
  listStyle: 'none',
});

export const fundingUserItemWrraper = style({
  display: 'flex',
  alignItems: 'center',
  height: 78,
  selectors: {
    '&:not(:first-child)': {
      borderTop: `1px solid ${vars.color.black04}`,
    },
  },
});

export const fudingUserImg = style({
  height: 35,
  width: 35,
  marginRight: 16,
});

export const emptyIcon = style({
  marginTop: 48,
});

export const wishItemDescription = style({
  marginTop: 20,
});

// TODO: Flating 인지 아닌지 확인하고 BG 어떻게 해야하는지?
export const modifyModeFooter = style({
  position: 'fixed',
  zIndex: 1,
  backgroundColor: vars.color.white100,
  bottom: 0,
  display: 'flex',
  gap: 8,
  justifyContent: 'space-between',
  width: '100%',
  padding: 20,
});
