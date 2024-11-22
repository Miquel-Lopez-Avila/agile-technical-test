import { useLayoutEffect, useState } from 'react';
import { tabletBreakpoint } from '@/application/config/variables';

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  useLayoutEffect(() => {
    const updateDeviceState = () => {
      setIsTablet(window.innerWidth <= tabletBreakpoint);
    };

    window.addEventListener('resize', updateDeviceState);

    return () => {
      window.removeEventListener('resize', updateDeviceState);
    };
  }, []);

  return { isTablet };
};

export default useIsTablet;
