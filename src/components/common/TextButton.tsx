import { RecipeVariants } from '@vanilla-extract/recipes';
import React from 'react';
import { buttonIcon, linkIcon, textButton } from '@/components/common/TextButton.css';
import { Body14, Body16 } from './typography';
import SvgPlus from './icons/Plus';
import SvgLeft from './icons/Left';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  iconName?: keyof typeof ButtonIcons;
  link?: boolean;
} & VariantType;

type VariantType = RecipeVariants<typeof textButton>;

const ButtonIcons = {
  plus: SvgPlus,
};

const TextButton = ({
  onClick,
  disabled = false,
  size,
  children,
  iconName,
  link = false,
}: Props) => {
  const TypoComponent = size === 'medium' ? Body16 : Body14;
  const IconComponent = iconName && ButtonIcons[iconName];
  return (
    <button onClick={onClick} disabled={disabled} className={textButton({ size })}>
      {IconComponent && <IconComponent className={buttonIcon} />}
      <TypoComponent fw="bold">{children}</TypoComponent>
      {link && <SvgLeft viewBox="0 0 32 32" className={linkIcon} />}
    </button>
  );
};

export default TextButton;
