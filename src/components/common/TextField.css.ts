import { style, createThemeContract, createTheme, styleVariants } from '@vanilla-extract/css';
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

// const [inputBase, vars] = createTheme([
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
    caretColor: colors.secondary100, // TODO colors - but do I want this?
    caretShape: 'bar',
    '::-webkit-outer-spin-button': {
      // '-webkit-appearance': 'none',
      display: 'none',
      margin: 0,
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
    },
    // '-moz-appearance': 'textfield',
    '::placeholder': {
      color: colors.black64,
      // TODO typo body14
      fontSize: 14,
      // placeholderText,
    },
    ':focus': {
      // outline: 'none',
      backgroundColor: colors.secondary200,
    },
    ':read-only': {
      backgroundColor: colors.black08,
      color: colors.black100,
      cursor: 'default',
      // appearance: 'textfield',
      // '-moz-appearance': button, /* Firefox */
      // WebkitAppearance: 'textfield' /* Safari and Chrome */,
    },
    ':disabled': {
      outlineColor: colors.black04,
      // color: colors.black40,
      backgroundColor: colors.black08,
      color: colors.black40,
    },
    // ':invalid': {
    //   outline: '1px solid',
    //   outlineColor: 'red', // TODO colors
    // },
  },
]);

// TODO vhs font color -> type 변환
export const input = styleVariants({
  default: [inputBase],
  // focus: [
  //   inputBase,
  //   {
  //     outlineColor: colors.black04,
  //     color: colors.red,
  //     backgroundColor: colors.black64,
  //   },
  // ],
  error: [
    inputBase,
    {
      // outlineColor: colors.black04,
      outlineColor: colors.red,
      color: colors.red,
      // backgroundColor: colors.red,
    },
  ],
  disabled: [
    inputBase,
    {
      outlineColor: colors.black04,
      color: colors.black40,
      // backgroundColor: colors.black40,
    },
  ],
  readonly: [
    inputBase,
    {
      outlineColor: colors.black04,
      color: colors.red,
      // backgroundColor: colors.black40,
    },
  ],
});

// export const emptyInput = style([inputBase, {}]);
// export const focusInput = style([inputBase, {}]);
export const inputError = style([
  inputBase,
  {
    outlineColor: colors.red,
    ':focus': {
      backgroundColor: 'inherit',
    },
  },
]);
// export const readonlyInput = style([inputBase, {}]);

// export const label = style([
//   typography.body14,
//   {
//     color: colors.black64,
//     marginBottom: '4px',
//   },
// ]);

// export const [label, vars] = createTheme({
//   color: {
//     default: colors.black64,
//     error: colors.red,
//     disabled: colors.black40,
//   },
// });

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

// export const errorText = style([
//   typography.body12,
//   {
//     color: colors.red,
//     marginTop: '4px',
//   },
// ]);

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
  // ':visited': {
  // transform: 'scale(1)', // TODO 임의
  // },
});
