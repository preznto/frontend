import React, { ElementType } from 'react';
import { Typography, typography } from '@/theme/typography.css';
import clsx from 'clsx';
import * as styles from './base.css';
import { Color, vars } from '@/theme/globalTheme.css';
import { CSSProperties } from '@vanilla-extract/css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export type FontWeight = 'normal' | 'bold';
export interface VariantProps {
  fw?: FontWeight;
  color?: Color;
}

interface TypographyProps
  extends VariantProps,
    Omit<React.HTMLProps<HTMLElement>, 'color' | 'style' | 'as'> {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  maxLines?: number;
}

const withTypographyBase = (el: ElementType, variant: Typography) => {
  const Typography: React.FC<TypographyProps> = ({
    as = el,
    className,
    children,
    style,
    fw,
    color,
    maxLines,
    ...props
  }) => {
    return React.createElement(
      as,
      {
        className: clsx(className, typography[variant], maxLines && styles.lineClamp),
        style: {
          fontWeight: fw,
          color: color ? vars.color[color] : undefined,
          ...(maxLines &&
            assignInlineVars({
              [styles.maxLines]: maxLines.toString(),
            })),
          ...style,
        },
        ...props,
      },
      children
    );
  };

  return Typography;
};
export default withTypographyBase;
