import { FC, ReactNode } from 'react';
import { ButtonWrapper } from './Button.styled';

interface Props {
  disabled?: boolean;
  children: ReactNode;
}

const Button: FC<Props> = ({ children, disabled, ...rest }) => {
  return (
    <ButtonWrapper disabled={disabled} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
