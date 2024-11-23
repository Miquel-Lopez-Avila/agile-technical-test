import { FC } from 'react';

interface Props {
  type: FC<any>;
}
const Icon: FC<Props> = ({ type, ...rest }) => {
  const IconComponent = type;

  return <IconComponent {...rest} />;
};

export default Icon;
