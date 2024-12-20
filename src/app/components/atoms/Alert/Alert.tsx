import { styled } from '@pigment-css/react';

// import { Colors } from '@styles/colors';
// import { Check } from 'react-feather';
// import styled from 'styled-components';

export function Alert({ children, type = 'alarm' }: AlertProps) {
  return (
    <AlertWrapper>
      {/* <IconWrapper> */}
      {/* <Check /> */}
      {/* </IconWrapper> */}
      {/* <Label>{children}</Label> */}
    </AlertWrapper>
  );
}

const AlertWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0px 2px 20px hsl(0deg 0% 0% / 0.35)',
  borderRadius: '4px',
  padding: '8px',
});

// const IconWrapper = styled.div`
//   width: 40px;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-self: flex-start;
//   background: ${Colors.Primary};
//   color: ${Colors.White};
//   border-radius: 50%;
//   margin-right: 8px;
//   flex-shrink: 0;
// `;

// const Label = styled.div`
//   flex-grow: 1;
// `;

type AlertProps = {
  children: React.ReactNode;
  type: 'alarm' | 'success' | 'warning' | 'info';
};
