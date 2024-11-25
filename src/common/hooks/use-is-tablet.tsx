import { useLayoutEffect, useState } from 'react';
import { breakpoints } from '@/application/styles/breakpoints';

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(
    window.innerWidth <= breakpoints.tablet
  );

  useLayoutEffect(() => {
    const updateDeviceState = () => {
      setIsTablet(window.innerWidth <= breakpoints.tablet);
    };

    window.addEventListener('resize', updateDeviceState);

    return () => {
      window.removeEventListener('resize', updateDeviceState);
    };
  }, []);

  return { isTablet };
};

export default useIsTablet;
