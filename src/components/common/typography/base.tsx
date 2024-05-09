import type { StyleXStyles } from '@stylexjs/stylex';
import { Color, colors } from '@/theme/colors.stylex';
import React, { ElementType } from 'react';
import * as stylex from '@stylexjs/stylex';
import { Typography, typography } from '@/theme/typography.stylex';

type FontWeight = 'normal' | 'bold';

interface VariantProps {
  fw?: FontWeight;
  color?: Color;
}
interface TypographyProps
  extends VariantProps,
    Omit<React.HTMLProps<HTMLElement>, 'color' | 'style' | 'as'> {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: StyleXStyles;
}

const styles = stylex.create({
  variant: (variant: Required<VariantProps>) => ({
    color: colors[variant.color],
    fontWeight: variant.fw,
  }),
});

const withTypographyBase = (el: ElementType, variant: Typography) => {
  const Typography: React.FC<TypographyProps> = ({
    as = el,
    className,
    children,
    style,
    fw = 'normal',
    color = 'black',
    ...props
  }) => {
    return React.createElement(
      as,
      {
        className,
        ...stylex.props(style, typography[variant], styles.variant({ fw, color })),
        ...props,
      },
      children
    );
  };

  return Typography;
};
export default withTypographyBase;
