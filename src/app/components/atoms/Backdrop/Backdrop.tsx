import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

export const Backdrop = ({ children, opacity, color }: BackdropProps) => {
  return (
    <Wrapper
      style={
        {
          '--color': color,
          '--opacity': opacity,
        } as CSPropertiesWithVariables
      }
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-primary);
  color: var(--color);
  opacity: var(--opacity);
`;

type BackdropProps = {
  children: ReactNode;
  opacity: number;
  color: string;
};

interface CSPropertiesWithVariables extends CSSProperties {
  '--color': string;
  '--opacity': number;
}
