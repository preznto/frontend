import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  columnGap: 20,
  alignItems: 'center',
  position: 'relative',
});

const disabledSelectors = {
  [`${container}[data-inactive="true"] &`]: {
    opacity: 0.4,
  },
};

export const contentsWrapper = style({
  padding: '5px 0',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
  flexGrow: 1,
});

export const image = style({
  selectors: disabledSelectors,
  objectFit: 'fill',
});

export const name = style({
  height: 36,
  width: '80%',
  selectors: disabledSelectors,
});

export const progressBarWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 4,
  selectors: disabledSelectors,
});

export const spaceBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: 12,
});
