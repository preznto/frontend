import type { StyleXStyles } from '@stylexjs/stylex';
import React, { ElementType } from 'react';
import { Typography, typography } from '@/theme/typography.css';
import clsx from 'clsx';
import { VariantProps } from './base.css';
import { vars } from '@/theme/globalTheme.css';

interface TypographyProps
  extends VariantProps,
    Omit<React.HTMLProps<HTMLElement>, 'color' | 'style' | 'as'> {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: StyleXStyles;
}

const withTypographyBase = (el: ElementType, variant: Typography) => {
  const Typography: React.FC<TypographyProps> = ({
    as = el,
    className,
    children,
    style,
    fw,
    color,
    ...props
  }) => {
    return React.createElement(
      as,
      {
        className: clsx(className, typography[variant]),
        style: { fontWeight: fw, color: color ? vars.color[color] : undefined, ...style },
        ...props,
      },
      children
    );
  };

  return Typography;
};
export default withTypographyBase;
