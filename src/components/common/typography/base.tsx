import React, { ElementType } from 'react';
import { Typography, typography } from '@/theme/typography.css';
import clsx from 'clsx';
import { VariantProps } from './base.css';
import { colors } from '@/theme/globalTheme.css';
import { CSSProperties } from '@vanilla-extract/css';

interface TypographyProps
  extends VariantProps,
    Omit<React.HTMLProps<HTMLElement>, 'color' | 'style' | 'as'> {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
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
        style: { fontWeight: fw, color: color ? colors[color] : undefined, ...style },
        ...props,
      },
      children
    );
  };

  return Typography;
};
export default withTypographyBase;
