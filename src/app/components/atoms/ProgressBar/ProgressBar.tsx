import { Colors } from '@styles/colors';
import React from 'react';
import styled from 'styled-components';

import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

export const ProgressBar = ({
  value = 0,
  size = 'large',
}: ProgressBarProps) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  value = Math.min(value, 100);
  value = Math.max(value, 0);

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      size={size}
      value={value}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper size={size}>
        <Bar value={value} size={size} style={{ '--width': `${value}%` }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<ProgressBarProps>`
  background-color: ${Colors.TransparentGray15};
  box-shadow: inset 0px 2px 4px ${Colors.TransparentGray75};
  border: 2px solid ${Colors.Gray400};
  border-radius: ${({ size }) => `${STYLES[size].radius + 2}px`};
`;

const BarWrapper = styled.div<ProgressBarProps>`
  border-radius: ${({ size }) => `${STYLES[size].radius}px`};
  overflow: hidden; // trim corner when progress bar is near full
`;

const Bar = styled.div<ProgressBarProps>`
  background-color: ${Colors.Primary};
  height: ${({ size }) => `${STYLES[size].height}px`};
  width: var(--width);
  padding: 1px 0 1px 0;
  border-radius: ${({ size }) =>
    `${STYLES[size].radius}px 0 0 ${STYLES[size].radius}px`};
`;

type ProgressBarProps = {
  size: 'small' | 'medium' | 'large';
  value?: number;
  style?: any;
};

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};
