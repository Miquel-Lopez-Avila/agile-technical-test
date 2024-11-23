import { useLayoutEffect, useState } from 'react';
import { breakpoints } from '@/application/styles/breakpoints';

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

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
