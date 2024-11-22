import React from 'react';
import { ButtonWrapper } from './Button.styled';

interface props {
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<props> = ({ children, disabled, ...rest }) => {
  return (
    <ButtonWrapper disabled={disabled} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
