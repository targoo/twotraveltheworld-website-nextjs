import React from 'react';
import styled from 'styled-components';

export const Select2 = ({ children, value, onChange }: SelectProps) => {
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  );
};

export const Select = ({ children }: SelectProps) => {
  return (
    <Wrapper>
      <NativeSelect>{children}</NativeSelect>
      <PresentationalBit>PresentationalBit</PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  border: 1px solid green;
  padding: 8px;
`;

type SelectProps = {
  value: string;
  onChange: any;
  label?: string;
  children: React.ReactNode;
};

Select.displayName = 'Select';
