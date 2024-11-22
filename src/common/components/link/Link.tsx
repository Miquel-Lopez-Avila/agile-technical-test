import React from 'react';

interface props {
  href: string;
  target?: string;
  children: React.ReactNode;
}
const Link: React.FC<props> = ({ href, children = '', ...rest }) => {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

export default Link;
