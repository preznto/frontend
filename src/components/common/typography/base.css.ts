import { Color } from '@/theme/globalTheme.css';
import { style } from '@vanilla-extract/css';

export type FontWeight = 'normal' | 'bold';
export interface VariantProps {
  fw?: FontWeight;
  color?: Color;
}

export const base = (props: VariantProps) =>
  style({
    color: props.color,
    fontWeight: props.fw,
  });
