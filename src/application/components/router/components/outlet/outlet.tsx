import React from 'react';
import { Outlet, OutletProps } from 'react-router-dom';

interface ICustomOutlet extends Omit<OutletProps, 'context'> {
  context?: Record<string, any>;
}

export const CustomOutlet: React.FC<ICustomOutlet> = ({
  context = {},
  ...props
}) => {
  return (
    <Outlet
      {...props}
      context={{
        isInsideOutlet: true,
        ...context
      }}
    />
  );
};
