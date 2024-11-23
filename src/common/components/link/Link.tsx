import { FC, ReactNode } from 'react';
import { Wrapper } from './Link.styled';

interface Props {
  href: string;
  target?: string;   
  children: ReactNode;
}
const Link: FC<Props> = ({ href, children = '', ...rest }) => {
  return (
    <Wrapper href={href} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Link;
