import { Colors } from '@styles/colors';
import React from 'react';
import styled from 'styled-components';

export const Button = ({
  children,
  size = 'medium',
  variant = 'fill',
  className,
  href,
}: ButtonProps) => {
  let Component = null;
  switch (variant) {
    case 'fill': {
      Component = FillButton;

      break;
    }
    case 'outline': {
      Component = OutlineButton;

      break;
    }
    case 'ghost': {
      Component = GhostButton;

      break;
    }
    default: {
      throw new Error(`Unrecognized Button variant: ${variant}`);
    }
  }
  return (
    <Component
      as={href ? 'a' : 'button'}
      href={href}
      size={size}
      className={className}
    >
      <span>{children}</span>
    </Component>
  );
};

export const WarningButton = styled(Button)`
  background-color: red !important;
`;

const BasedButton = styled.button<ButtonProps>`
  border: none;
  display: block;
  font-size: ${props => Sizes[props.size]?.fontSize};
  border-radius: ${props => Sizes[props.size]?.borderRadius};
  cursor: pointer;
  text-decoration: none;
  padding: 0;
  background-color: transparent;

  span {
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    border-radius: ${props => Sizes[props.size]?.borderRadiusInternal};
    transition: transform 500ms;
    will-change: transform;
    padding: ${props => Sizes[props.size]?.padding};
  }

  &:hover span {
    transition: transform 200ms;
    transform: translate(4px, -4px);
  }

  &:focus {
    outline-color: var(--color-primary);
    outline-offset: 4px;
  }
`;

const FillButton = styled(BasedButton)`
  background-color: ${Colors.Primary};
  color: ${Colors.White};

  span {
    border: 1px solid ${Colors.PrimaryDarker};
  }

  &:active span {
    border: 1px solid ${Colors.PrimaryDarkest};
    color: ${Colors.Black};
  }
`;

const OutlineButton = styled(BasedButton)`
  border: 1px solid ${Colors.PrimaryDarkest};
  color: ${Colors.Primary};

  span {
    border: 1px solid ${Colors.Primary};
  }

  &:active span {
    border: 1px solid ${Colors.PrimaryDarkest};
    color: ${Colors.Black};
  }
`;

const GhostButton = styled(BasedButton)`
  background-color: ${Colors.Gray1000};
  border: 1px solid ${Colors.Gray600};
  color: ${Colors.Gray100};

  span {
    border: 1px solid ${Colors.Gray800};
  }
`;

type ButtonProps = {
  size: 'small' | 'medium' | 'large';
  variant?: 'fill' | 'outline' | 'ghost';
  href?: string;
  className?: string;
  children: React.ReactNode;
};

Button.displayName = 'Button';

const Sizes = {
  small: {
    borderRadius: '3px',
    borderRadiusInternal: '2px',
    padding: '4px 6px',
    fontSize: `${16 / 16}rem`,
  },
  medium: {
    borderRadius: '5px',
    borderRadiusInternal: '4px',
    padding: '12px 16px',
    fontSize: `${24 / 16}rem`,
  },
  large: {
    borderRadius: '8px',
    borderRadiusInternal: '7px',
    padding: '28px 32px',
    fontSize: `${32 / 16}rem`,
  },
};
