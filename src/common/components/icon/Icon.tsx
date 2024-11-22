import React from 'react';

interface props {
  type: React.FC<any>;
}
const Icon: React.FC<props> = ({ type, ...rest }) => {
  const IconComponent = type;

  return <IconComponent {...rest} />;
};

export default Icon;
