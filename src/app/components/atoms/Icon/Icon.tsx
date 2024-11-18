// https://icomoon.io/#icons
// https://feathericons.com/
// https://styled-icons.dev/
import {
  Car,
  ChevronsDown,
  ChevronsRight,
  Walk,
} from '@styled-icons/boxicons-regular';
import { Colors } from '@styles/colors';
import styled, { css } from 'styled-components';

import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

export function Icon({
  padding = 0,
  size = 1,
  color = Colors.Primary,
  label,
  className,
  children,
}: IconProps) {
  return (
    <IconWrapper
      color={color}
      size={size}
      padding={padding}
      className={className}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {children}
    </IconWrapper>
  );
}

export const CarIcon = (arguments_: Omit<IconProps, 'children'>) => (
  <Icon label="Car" {...arguments_}>
    <Car />
  </Icon>
);

export const WalkIcon = (argument: Omit<IconProps, 'children'>) => (
  <Icon label="Walk" {...argument}>
    <Walk />
  </Icon>
);

export const ChevronsRightIcon = (argument: Omit<IconProps, 'children'>) => (
  <Icon label="Chevrons Right" {...argument}>
    <ChevronsRight />
  </Icon>
);

export const ChevronsDownIcon = (argument: Omit<IconProps, 'children'>) => (
  <Icon label="Chevrons Down" {...argument}>
    <ChevronsDown />
  </Icon>
);

const IconWrapper = styled.div<IconProps>`
  display: flex;

  ${({ padding }) => {
    if (padding) {
      return css`
        padding: ${padding}px;
      `;
    }
  }};

  ${({ size = 1 }) => {
    if (size) {
      return css`
        width: ${size}em;
      `;
    }
  }};

  & > svg {
    flex: 1;
    height: auto;
    ${({ color = Colors.Primary }) => {
      if (color) {
        return css`
          color: ${color};
        `;
      }
    }};
  }
`;

type IconProps = {
  size?: number;
  padding?: number;
  label?: string;
  className?: string;
  children: React.ReactNode;
  color?: Colors;
};
