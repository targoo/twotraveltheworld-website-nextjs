import React from 'react';
import styled from 'styled-components';

export const Wrapper = ({ children }: WrapperProps) => {
  return <Container>{children}</Container>;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

type WrapperProps = {
  children: React.ReactNode;
};
