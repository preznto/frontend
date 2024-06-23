import React from 'react';
import { badgeStyle } from './Badge.css';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { Body10 } from './typography';

type Props = {
  children: React.ReactNode;
} & VariantType;

type VariantType = RecipeVariants<typeof badgeStyle>;

const Badge: React.FC<Props> = ({ children, color }) => {
  return (
    <Body10 fw="bold" className={badgeStyle({ color })}>
      {children}
    </Body10>
  );
};

export default Badge;
