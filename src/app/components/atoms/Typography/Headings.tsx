import { Colors } from '@styles/colors';
import {
  HeadingStyle1,
  HeadingStyle2,
  HeadingStyle3,
  HeadingStyle4,
} from '@styles/fonts';
import styled from 'styled-components';

export interface HProps {
  underscoreColor?: string;
  color?: string;
}

export const H1 = styled.h1<HProps>`
  ${HeadingStyle1}
  color: ${({ color }) => color || Colors.Black};
  text-transform: uppercase;
  :after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${({ underscoreColor }) => underscoreColor || Colors.Primary};
  }
`;

export const H2 = styled.h2<HProps>`
  ${HeadingStyle2}
  color: ${({ color }) => color || Colors.Black};
  text-transform: uppercase;
  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 30px;
    height: 3px;
    background: ${({ underscoreColor }) => underscoreColor || Colors.Secondary};
  }
`;

export const H3 = styled.h3`
  ${HeadingStyle3};
  color: ${Colors.Black};
`;

export const H4 = styled.h4`
  ${HeadingStyle4};
  color: ${Colors.Black};
`;
