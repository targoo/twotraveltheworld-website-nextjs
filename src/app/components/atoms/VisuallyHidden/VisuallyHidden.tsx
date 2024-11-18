'use client';

import { css } from '@pigment-css/react';
import React from 'react';

export const VisuallyHidden = ({ children, ...rest }: VisuallyHiddenProps) => {
  const [forceShow, setForceShow] = React.useState<boolean>(false);
  React.useEffect(() => {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (event_: any) => {
        if (event_?.key === 'Alt') {
          setForceShow(true);
        }
      };
      const handleKeyUp = (event_: any) => {
        if (event_?.key === 'Alt') {
          setForceShow(false);
        }
      };
      globalThis.addEventListener('keydown', handleKeyDown);
      globalThis.addEventListener('keyup', handleKeyUp);
      return () => {
        globalThis.removeEventListener('keydown', handleKeyDown);
        globalThis.removeEventListener('keydown', handleKeyUp);
      };
    }
  }, []);
  if (forceShow) {
    return <>{children}</>;
  }
  return (
    <span className={visuallyHidden} {...rest}>
      {children}
    </span>
  );
};

const visuallyHidden = css({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});

type VisuallyHiddenProps = {
  children: React.ReactNode;
};
