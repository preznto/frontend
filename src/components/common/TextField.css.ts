import { style, styleVariants } from '@vanilla-extract/css';
import { typography } from '@/theme/typography.css';
import { colors } from '@/theme/globalTheme.css';

export const textFieldLayout = style({
  display: 'flex',
  flexDirection: 'column',
});

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: 'fit-content',
});

export const inputBase = style([
  typography.body16,
  {
    width: '353px',
    backgroundColor: colors.grayblue,
    color: colors.black100,
    borderRadius: '4px',
    outline: '1px solid',
    outlineColor: colors.gray04,
    outlineOffset: '-1px',
    borderColor: 'transparent',
    padding: '16px 20px',
    caretColor: colors.secondary100,
    caretShape: 'bar',
    '::-webkit-outer-spin-button': {
      display: 'none',
      margin: 0,
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
    },
    '::placeholder': {
      color: colors.black64,
    },
    ':focus': {
      backgroundColor: colors.secondary200,
    },
    ':read-only': {
      backgroundColor: colors.black08,
      color: colors.black100,
      cursor: 'default',
    },
    ':disabled': {
      outlineColor: colors.black04,
      backgroundColor: colors.black08,
      color: colors.black40,
    },
  },
]);

export const inputError = style([
  inputBase,
  {
    outlineColor: colors.red,
    ':focus': {
      backgroundColor: 'inherit',
    },
  },
]);

const labelBase = style([
  typography.body14,
  {
    marginBottom: '4px',
  },
]);

export const label = styleVariants({
  default: [labelBase, { color: colors.black64 }],
  error: [labelBase, { color: colors.red }],
  disabled: [labelBase, { color: colors.black40 }],
});

const helperTextBase = style([
  typography.body12,
  {
    marginTop: '4px',
  },
]);

export const helperText = styleVariants({
  default: [helperTextBase, { color: colors.black64 }],
  error: [helperTextBase, { color: colors.red }],
  disabled: [helperTextBase, { color: colors.black40 }],
});

export const unit = style({
  position: 'absolute',
  display: 'inline-flex',
  alignItems: 'center',
  right: '20px',
  height: '100%',
});

export const clearBtn = style({
  position: 'absolute',
  display: 'inline-flex',
  alignItems: 'center',
  right: '20px',
  width: '22px',
  height: '22px',
  ':hover': {
    filter: 'contrast(50%)', // TODO 임의
  },
  ':active': {
    transform: 'scale(0.9)', // TODO 임의
  },
});
