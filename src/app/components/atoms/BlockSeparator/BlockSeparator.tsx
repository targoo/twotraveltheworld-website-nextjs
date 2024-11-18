import { Colors } from '@styles/colors';
import { ReactNode } from 'react';
import styled from 'styled-components';

type BlockSeparatorProps = {
  children: ReactNode;
};

export const BlockSeparator = ({ children }: BlockSeparatorProps) => (
  <Wrapper>
    <GridLine />
    <Content>{children}</Content>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  padding-block-start: 10px;
  height: 20px;
`;

// const HR = styled.hr`
//   margin-inline: 30px;
//   border-top: 1px dotted ${Colors.Primary};
// `;

const Content = styled.div`
  position: absolute;
  height: 20px;
  background-color: ${Colors.White};
  top: 0px;
  left: 80px;
`;

const GridLine = styled.div`
  --background: #ffffff;
  --color: ${Colors.Contrast};
  --height: 1px;
  --width: 5px;
  --fade-stop: 90%;
  /* Bleed in or out from the container */
  --offset: -100px;

  position: absolute;
  width: calc(100% + var(--offset));
  height: var(--height);
  left: calc(var(--offset) / 2 * -1);

  background: linear-gradient(
    to right,
    var(--color),
    var(--color) 50%,
    transparent 0,
    transparent
  );
  background-size: var(--width) var(--height);

  /* Fade out the edges */
  mask-composite: exclude;
  -webkit-mask: linear-gradient(
      to left,
      var(--background) var(--fade-stop),
      transparent
    ),
    linear-gradient(to right, var(--background) var(--fade-stop), transparent),
    linear-gradient(black, black);
`;
