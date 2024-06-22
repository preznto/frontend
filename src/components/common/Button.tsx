import { RecipeVariants } from '@vanilla-extract/recipes';
import React from 'react';
import { buttonStyle, spinner } from '@/components/common/Button.css';
import Lottie from 'react-lottie-player';
import spinnerLottie from '@/assets/lottie/spinner.json';
import { Body14, Body18 } from './typography';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
} & VariantType;

type VariantType = RecipeVariants<typeof buttonStyle>;

const Button: React.FC<Props> = ({
  onClick,
  disabled = false,
  loading = false,
  type = 'primary',
  size,
  children,
}) => {
  const TypoComponent = size === 'large' ? Body18 : Body14;

  return (
    <button onClick={onClick} disabled={disabled} className={buttonStyle({ type, size })}>
      {loading ? (
        <Lottie loop play animationData={spinnerLottie} className={spinner({ size })} />
      ) : (
        <TypoComponent fw="bold">{children}</TypoComponent>
      )}
    </button>
  );
};

export default Button;
